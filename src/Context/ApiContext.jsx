import React, { createContext, useEffect, useState } from 'react'
import { db } from '../Firebase/Config';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
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
    }


    // const washingtonRef = doc(db, "cities", "DC");

    // // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //   capital: true
    // });



    //-------------------------------addUser
    // const addUser = async () => {

    //     try {
    //         const docRef = await addDoc(collection(db, "user"), {
    //             first: "Ada",
    //             last: "Lovelace",
    //             born: 1815
    //         });
    //         console.log("Document written with ID: ", docRef.id);
    //     } catch (e) {
    //         console.error("Error adding document: ", e);
    //     }
    // }



    //-------------------------------addTask

    const [newTask, setNewTask] = useState([])
    const addTask = async (inputDate, inputValue) => {
        try {


            if (user !== undefined) {

                const newTk = user.tasks.find(obj =>
                    obj.fecha === inputDate

                )

                console.log(newTk); //undefined
                // console.log(newTk.task);

                if (newTk !== undefined) {
                    // console.log(newTask.fecha);
                    newTk.task.push({ name: inputValue, done: false })
                    setNewTask(newTk)

                }



            }
            if (newTask.length !== 0) {
                console.log(newTask);//solo los task

            }
            //tengo que buscar como entro a la fecha y guardarlo ahi

            const productRef = doc(db, "user", user.id);


            // await updateDoc(productRef, newTask.task);

            // for (const productCart of products) {
            //     const productRef = doc(db, "user", productCart.id);

            //     await updateDoc(productRef, {
            //        name: inputValue, done: false
            //     });
            // }

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    return (
        <ApiContext.Provider value={{ user, addTask }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider