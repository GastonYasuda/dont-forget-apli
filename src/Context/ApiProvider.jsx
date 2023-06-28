import React, { createContext } from 'react'

export const ApiContext = createContext()

const ApiProvider = ({ children }) => {


    const prueba = () => {
        console.log("hola");
    }



    return (
        <ApiContext.Provider value={{ prueba }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider