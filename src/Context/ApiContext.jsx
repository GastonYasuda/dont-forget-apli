import React, { createContext, useState } from 'react'
import { db } from '../Firebase/Config';
import { collection, getDocs, addDoc, query, where, setDoc } from 'firebase/firestore';
import { doc } from "firebase/firestore";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import GenerateNewUser from '../Service/GenerateNewUser';


export const ApiContext = createContext()

const ApiProvider = ({ children }) => {

    const [continueOmit, setContinueOmit] = useState(false)

    const [user, setUser] = useState([])

    //-------------------------------checkUser
    const [createGoogleUser, setCreateGoogleUser] = useState(false)

    const checkUser = async (mail, pass) => {
        const cole = collection(db, "user")

        const q = query(cole, where("loginMail", "==", mail), where("password", "==", pass));

        const querySnapshot = await getDocs(q);

        console.log(typeof (querySnapshot));
        console.log(querySnapshot.empty);//true no tiene nada

        if (querySnapshot.empty === false) {

            querySnapshot.forEach((doc) => {
                const usuarioConId = ({ id: doc.id, ...doc.data() });

                setUser(usuarioConId)
                localStorage.setItem('USUARIO', JSON.stringify(usuarioConId))
                setContinueOmit(true)
            });
        } else {
            console.log("no existe ");
            setCreateGoogleUser(true)
        }
    }

    //-------------------------------addNewUser

    const addNewUser = async (nicknameValue, loginMailValue, passwordValue) => {
        // AGREGAR UN NUEVO USUARIO A LA COLECCION "usuarios" CON SU CORRESPONDIENTE ARRAY.

        try {
            const newUserSet = GenerateNewUser({
                nickname: nicknameValue,
                loginMail: loginMailValue,
                password: passwordValue
            })

            const usuario = await addDoc(collection(db, "user"), newUserSet);
            const usuarioConId = ({ id: usuario.id, ...newUserSet });

            setUser(usuarioConId)
            localStorage.setItem(`USUARIO`, JSON.stringify(usuarioConId))
            setContinueOmit(true)

        } catch (error) {
            console.log(error);
        }

    }

    //-------------------------------getLocal

    const getLocal = () => {
        const item = JSON.parse(localStorage.getItem('USUARIO'))
        if (item !== null) {
            setContinueOmit(true)
            return true
        }
    }

    //-------------------------------logOut

    const logOut = () => {
        localStorage.removeItem("USUARIO")
        setUser('')

        setContinueOmit(false)
    }


    //-------------------------------searchPass
    const [userPass, setUserPass] = useState([])
    const searchPass = async (mailValue) => {
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

        //user me dice undefined
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
        <ApiContext.Provider value={{ user, checkUser, setUser, addNewTask, addTask, emailJS, addNewUser, searchPass, userPass, continueOmit, setContinueOmit, getLocal, logOut, createGoogleUser }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider