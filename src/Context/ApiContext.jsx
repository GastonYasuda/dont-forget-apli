import React, { createContext, useState } from 'react'
import { db } from '../Firebase/Config';
import { collection, getDocs, addDoc, query, where, setDoc } from 'firebase/firestore';
import { doc } from "firebase/firestore";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


export const ApiContext = createContext()

const ApiProvider = ({ children }) => {
    const [user, setUser] = useState([])
    //-------------------------------getUsers

    // const [users, setUsers] = useState([])
    // const getUsers = async () => {
    //     const allUser = [];
    //     const querySnapshot = await getDocs(collection(db, "user"));
    //     querySnapshot.forEach((doc) => {

    //         const usuario = {
    //             id: doc.id,
    //             ...doc.data()
    //         }
    //         allUser.push(usuario)
    //     });
    //     setUsers(allUser)
    // }

    //-------------------------------checkUser

    const [next, setNext] = useState(false)

    const checkUser = async (mail, pass) => {
        const cole = collection(db, "user")

        const q = query(cole, where("loginMail", "==", mail), where("password", "==", pass));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const usuarioConId = ({ id: doc.id, ...doc.data() });

            setUser(usuarioConId)
            localStorage.setItem('USUARIO', JSON.stringify(usuarioConId))
            setNext(true)
        });
    }

    //-------------------------------localUser
    const [localUser, setLocalUser] = useState(false)
    const searchLocalUser = () => {

        if (localStorage.getItem('USUARIO') !== null) {
            setLocalUser(true)
            console.log("ver");
        } else {
            console.log("nooooooooo");
        }

    }

    //-------------------------------addUser

    const addUser = async (newUser) => {
        // AGREGAR UN NUEVO USUARIO A LA COLECCION "usuarios" CON SU CORRESPONDIENTE ARRAY.
        const usuario = await addDoc(collection(db, "user"), newUser);
        const usuarioConId = ({ id: usuario.id, ...newUser });

        localStorage.setItem(`USUARIO`, JSON.stringify(usuarioConId))

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
        <ApiContext.Provider value={{ user, checkUser, setUser, addNewTask, addTask, emailJS, addUser, searchPass, userPass, searchLocalUser, localUser, next }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider