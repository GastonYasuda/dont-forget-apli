import React, { createContext, useEffect, useState } from 'react'
import { db } from '../Firebase/Config';
import { collection, getDocs } from 'firebase/firestore';



export const ApiContext = createContext()

const ApiProvider = ({ children }) => {
    const [user, setUser] = useState([])

    useEffect(() => {
        getUser()
    }, [])

    //-------------------------------getUser
    const getUser = async () => {
        const allUser = [];
        const querySnapshot = await getDocs(collection(db, "user"));
        querySnapshot.forEach((doc) => {

            const usuario = {
                id: doc.id,
                ...doc.data()
            }
            allUser.push(usuario)
        });
        setUser(allUser[0])
    }



    return (
        <ApiContext.Provider value={{  getUser, user }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider