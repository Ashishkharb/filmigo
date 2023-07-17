import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
    const [searchStr, setSearchStr] = useSearchStr();
    const [searchOption, setSearchOption] = useState('shows');

    const onSearchInputChange = ev => {
        setSearchStr(ev.target.value);  // whenever this setSearchStr changes it will call useSearchStr
    };
    const onRadioChange = ev => {
        setSearchOption(ev.target.value);
    };

    const onSubmit = ev => {
        ev.preventDefault();
        const options = {
            q: searchStr,
            searchOption,
        };
        onSearch(options);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={searchStr} //Two-way data binding
                onChange={onSearchInputChange}
            />
            <CustomRadio
                label = "Shows" 
                name="Search-option"
                value="shows"
                checked={searchOption === 'shows'}
                onChange={onRadioChange}
            />
            <CustomRadio
                label = "Actors" 
                name="Search-option"
                value="actors"
                checked={searchOption === 'actors'}
                onChange={onRadioChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
