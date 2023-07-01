import React, { createContext, useEffect, useState } from 'react'
import { db } from '../Firebase/Config';
import { collection, getDocs, query, where } from 'firebase/firestore';



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


    const getByDate = async () => {
        console.log("hola");
        const q = query(collection(db, "user"), where("fecha", "==", "27/5/2023"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });

    }








    const prueba = () => {
        console.log("hola");
    }



    return (
        <ApiContext.Provider value={{ getByDate, prueba, user }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider