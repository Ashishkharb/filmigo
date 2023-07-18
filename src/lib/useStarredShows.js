import { useReducer, useEffect } from 'react';

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
    // the reducer function is from line 17
    const [state, dispatch] = useReducer(reducer, initialState, initial => {
        // initial here represent the initializer
        const persistedValue = localStorage.getItem(localStorageKey);

        return persistedValue ? JSON.parse(persistedValue) : initial; // if the local storage is empty then the initial value (i.e. initialState which is passed as initial to initializer) is set to persistedValue
        // otherwise the value of local storage is converted to string and passed to persisted value
    });

    useEffect(() => {
        // useEffect will set the value of localStorage every time the state changes.
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state, localStorageKey]);

    return [state, dispatch]; // this custom hook will return array with two values just like useReducer hook and useState hook
};

const starredShowsReducer = (currentStarred, action) => {
    // this is the reducer function after changing the state is return the value to
    switch (
        action.type // usePersistedReducer which will return new persisted value
    ) {
        case 'STAR':
            return currentStarred.concat(action.showId);
        case 'UNSTAR':
            return currentStarred.filter(showId => showId !== action.showId);
        default:
            return currentStarred;
    }
};

export const useStarredShows = () => {
    return usePersistedReducer(starredShowsReducer, [], 'starredShows');
};
