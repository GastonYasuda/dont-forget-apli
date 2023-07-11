import React, { createContext, useEffect, useState } from 'react'
import { db } from '../Firebase/Config';
import { collection, getDocs, addDoc, query, where, setDoc } from 'firebase/firestore';
import moment from 'moment';
import { doc, updateDoc } from "firebase/firestore";


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
        localStorage.setItem('USUARIO', JSON.stringify(allUser[0]))
    }


    //-------------------------------addNewTask

    const addNewTask = (dateValue, taskValue) => {
        let newArray = []

        const newTask = {
            name: taskValue,
            done: false
        }

        newArray = user.tasks.filter(obj => obj.fecha === dateValue)
        newArray[0].task.push(newTask)

        setUser({ ...user, "tasks": user.tasks })
        localStorage.setItem('USUARIO', JSON.stringify({ ...user, "tasks": user.tasks }))

        action(user.id, "", user.tasks)
    }

    const action = async (userId, typeOf, array) => {
        const userRef = doc(db, 'user', userId)

        await setDoc(userRef, { "tasks": array }, { merge: true })
    }





    return (
        <ApiContext.Provider value={{ user, setUser, addNewTask }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider