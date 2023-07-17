import { useEffect, useState } from 'react';

const usePersistedState = (initialState, sessionStorageKey) => {
    const [state, setState] = useState(() => {
        const persistedValue = sessionStorage.getItem(sessionStorageKey);
        return persistedValue ? JSON.parse(persistedValue) : initialState;
    });
    useEffect(() => {
        // useEffect will set the value of sessionStorage every time the state changes.
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
    }, [state, sessionStorageKey]);

    return [state, setState];
};

export const useSearchStr = () => {
    return usePersistedState('', 'searchString');
};
