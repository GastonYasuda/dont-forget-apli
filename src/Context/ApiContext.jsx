import React, { createContext, useEffect, useState } from 'react'
import { db } from '../Firebase/Config';
import { collection, getDocs, addDoc, query, where, setDoc } from 'firebase/firestore';
import moment from 'moment';
import { doc, updateDoc } from "firebase/firestore";


export const ApiContext = createContext()

const ApiProvider = ({ children }) => {
    const [user, setUser] = useState([])


    useEffect(() => {
        getUsers()
    }, [user])


    //-------------------------------getUsers

    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const allUser = [];
        const querySnapshot = await getDocs(collection(db, "user"));
        querySnapshot.forEach((doc) => {

            const usuario = {
                id: doc.id,
                ...doc.data()
            }
            allUser.push(usuario)
        });
        setUsers(allUser)
    }

    //-------------------------------checkUser

    const checkUser = (mail, pass) => {
        for (const key in users) {
            if (users[key].mail === mail & users[key].password === pass) {
                setUser(users[key])
                localStorage.setItem('USUARIO', JSON.stringify(users[key]))
            }
        }
    }

    //-------------------------------addNewTask

    const addNewTask = (dateValue, taskValue) => {

        const newTask = {
            name: taskValue,
            done: false
        }

        const newDateTask = {
            fecha: dateValue,
            task: [newTask]
        }

        const newArray = user.tasks.filter(obj => obj.fecha === dateValue)

        if (newArray.length !== 0) {
            newArray[0].task.push(newTask)

        } else {
            user.tasks.push(newDateTask)

        }

        setUser({ ...user, "tasks": user.tasks })
        localStorage.setItem('USUARIO', JSON.stringify({ ...user, "tasks": user.tasks }))
        addTask(user.id, "", user.tasks)
    }

    //-------------------------------addTask

    const addTask = async (userId, typeOf, array) => {
        const userRef = doc(db, 'user', userId)
        await setDoc(userRef, { "tasks": array }, { merge: true })
    }


    //-------------------------------eraseTask

    const eraseTask = async (userId, typeOf, array) => {
        const userRef = doc(db, 'user', userId)
        await setDoc(userRef, { "tasks": array }, { merge: true })
    }


    //-------------------------------emailJS
    // const emailJS = async (data) => {
    //     // API NECESARIA PARA ENVIAR UN CORREO ELECTRONICO A CIERTO MAIL.

    //     // ARRAY NECESARIO DE "data"
    //     // const array= {
    //     //     nombre:"",
    //     //     contrasena:"",
    //     //     toMail:""
    //     // }
    //     emailjs.send('service_rkbguuj', 'template_7y8c547', data, "EtNdfQu1yjfSB4fDT")
    //         .then(function (response) {
    //             console.log(response)
    //             return (true)
    //         }, function (error) {
    //             console.log(error)
    //             return (false)
    //         });
    // }



    return (
        <ApiContext.Provider value={{ user, checkUser, setUser, addNewTask, addTask }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider