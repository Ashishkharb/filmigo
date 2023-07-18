import { getShowByIds } from '../api/tvmaze';
import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

const Starred = () => {
    const [starredShowsIds] = useStarredShows(); // we only destructured starredShowIds from useStarredShows return value

    const { data: starredShows, error: starredShowsError } = useQuery({
        queryKey: ['starred', starredShowsIds],
        queryFn: () =>
            getShowByIds(starredShowsIds).then(result =>
                result.map(show => ({ show }))
            ),
        refetchOnWindowFocus: false,
    });
    if (starredShows?.length > 0) {
        return <ShowGrid shows={starredShows} />;
    }
    if (starredShows?.length === 0) {
        return <TextCenter>No shows are starred</TextCenter>;
    }
    if (starredShowsError) {
        return (
            <TextCenter>Error occured: {starredShowsError.message}</TextCenter>
        );
    }

    return <TextCenter>Shows are loading....</TextCenter>;
};

export default Starred;
