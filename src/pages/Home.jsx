import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';

const Home = () => {
    const [searchStr, setsearchStr] = useState('');
    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

    const onSearchInputChange = ev => {
        setsearchStr(ev.target.value);
    };

    const onSearch = async ev => {
        ev.preventDefault();
        try {
            setApiDataError(null);
            if (searchOption === 'shows') {
                const result = await searchForShows(searchStr);
                setApiData(result);
            } else {
                const result = await searchForPeople(searchStr);
                setApiData(result);
            }
        } catch (error) {
            setApiDataError(error);
        }
    };

    const onRadioChange = ev => {
        setSearchOption(ev.target.value);
    };
    const renderApiData = () => {
        if (apiDataError) {
            return <div>Error occured: {apiDataError.message}</div>;
        }
        if (apiData) {
            return apiData[0].show
                ? apiData.map(data => {
                      return <div key={data.show.id}>{data.show.name}</div>;
                  })
                : apiData.map(data => {
                      return <div key={data.person.id}>{data.person.name}</div>;
                  });
        }
        return null;
    };

    return (
        <div>
            <form onSubmit={onSearch}>
                <input
                    type="text"
                    value={searchStr} //Two-way data binding
                    onChange={onSearchInputChange}
                />
                <label>
                    Shows
                    <input
                        type="radio"
                        name="Search-option"
                        value="shows"
                        checked={searchOption === 'shows'}
                        onChange={onRadioChange}
                    />
                </label>
                <label>
                    Actors
                    <input
                        type="radio"
                        name="Search-option"
                        value="actors"
                        checked={searchOption === 'actors'}
                        onChange={onRadioChange}
                    />
                </label>
                <button type="submit">Search</button>
            </form>

            <div>{renderApiData()}</div>
        </div>
    );
};

export default Home;
