import { getShowByIds } from '../api/tvmaze';
import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import ShowGrid from '../components/shows/ShowGrid'

const Starred = () => {
    const [starredShowsIds] = useStarredShows(); // we only destructured starredShowIds from useStarredShows return value

    const { data: starredShows, error: starredShowsError } = useQuery({
        queryKey: ['starred', starredShowsIds],
        queryFn: () => 
            getShowByIds(starredShowsIds).then(result => 
                result.map(show => ({show}))
                ),
        refetchOnWindowFocus: false,
    });
    if(starredShows?.length >0){
        return <ShowGrid shows={starredShows}/>
    }
    if(starredShows?.length === 0){
        return <div>No shows are starred.</div>
    }
    if(starredShowsError){
        return <div>Error occured: {starredShowsError.message}</div>
    }

    return <div>Shows are loading....</div>;
};

export default Starred;
