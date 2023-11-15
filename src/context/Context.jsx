import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const Context = createContext()
const ContextProvider = ({children}) => {
    const [data,setData] = useState(JSON.parse(localStorage.getItem('data')) || [] )
    const providerValue = {data,setData}
    useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(data))
    },[data])
    return (
        <Context.Provider value={providerValue}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;
