import React from 'react';
import { createContext } from 'react';
export const State_Context = createContext(null)
const Manage_State = ({ children }) => {
    const manage_state = {

    }
    return <State_Context.Provider value={manage_state}>
        {children}
    </State_Context.Provider>
};

export default Manage_State;