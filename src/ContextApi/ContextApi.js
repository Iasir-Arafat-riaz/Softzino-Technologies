import React, { createContext } from 'react';
import useFirebase from '../pages/customHooks/useFirebase';

export const ContextApiProvider=createContext()

const ContextApi = ({children}) => {
    const globalState=useFirebase()
    return (
        <ContextApiProvider.Provider value={globalState}>
            {children}
        </ContextApiProvider.Provider>
    );
};

export default ContextApi;