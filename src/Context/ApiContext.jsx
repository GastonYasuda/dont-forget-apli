import React, { createContext, useEffect, useState } from 'react'
import { db } from '../Firebase/Config';
import { collection, getDocs, addDoc, query, where, setDoc } from 'firebase/firestore';
import moment from 'moment';
import { doc, updateDoc } from "firebase/firestore";
import emailjs from '@emailjs/browser';


export const ApiContext = createContext()

const ApiProvider = ({ children }) => {
    const [user, setUser] = useState([])


    useEffect(() => {
        getUsers()
        someLog()
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


    //-------------------------------someLog
    const [someUser, setSomeUser] = useState(false)
    const someLog = () => {
        //BUSCO SI EL LOGALHOST TIENE ALGO
        const come = JSON.parse(localStorage.getItem('USUARIO'))

        if (come) {
            setSomeUser(true);
        } 
    }


    //-------------------------------checkUser

    const checkUser = (mail, pass) => {
        for (const key in users) {
            if (users[key].loginMail === mail & users[key].password === pass) {
                setUser(users[key])
                localStorage.setItem('USUARIO', JSON.stringify(users[key]))
                // console.log(`BIENVENIDO ${users[key].nickname}`);
            }
        }
    }

    //-------------------------------addUser

    const addUser = async (newUser) => {
        // AGREGAR UN NUEVO USUARIO A LA COLECCION "usuarios" CON SU CORRESPONDIENTE ARRAY.
        const usuario = await addDoc(collection(db, "user"), newUser);
        const usuarioConId = ({ id: usuario.id, ...newUser });

        localStorage.setItem(`USUARIO LOGUEADO`, JSON.stringify(usuarioConId))

    }


    //-------------------------------searchPass
    const [userPass, setUserPass] = useState([])
    const searchPass = async (mailValue) => {
        console.log(mailValue);

        const cole = collection(db, "user")

        const tieneRegistro = await getDocs(query(cole, where("loginMail", "==", mailValue)))
        const isLogged = tieneRegistro.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        setUserPass(isLogged[0]);
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
    const emailJS = async (data) => {
        // API NECESARIA PARA ENVIAR UN CORREO ELECTRONICO A CIERTO MAIL.
        // ARRAY NECESARIO DE "data"

        emailjs.send('service_iugdjja', 'template_qgohwqj', data, "z-jtBy-t0kY66byef")
            .then(function (response) {
                console.log(response)
                return (true)
            }, function (error) {
                console.log(error)
                return (false)
            });
    }



    return (
        <ApiContext.Provider value={{ user, checkUser, setUser, addNewTask, addTask, emailJS, addUser, searchPass, userPass, someUser }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider