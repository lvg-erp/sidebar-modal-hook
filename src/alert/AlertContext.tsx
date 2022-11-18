import React, { useState, useContext, createContext } from 'react'

const AlertContext = createContext<any>(null)

export const useAlert = () => {

    return useContext(AlertContext)
    
}

export const AlertProvider = ({children}:any) => {

    const [alert, setAlert] = useState(false)
    // const toggleAlert = () => setAlert(!alert)  
    const toggle = () => setAlert(!alert)

    return (
        // <AlertContext.Provider value={alert}>
        //     { children }
        // </AlertContext.Provider>
        <AlertContext.Provider value={{
            visible: alert,
            toggle
        }}>
            { children }
        </AlertContext.Provider>
    )
}