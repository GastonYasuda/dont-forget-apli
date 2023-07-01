import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../Context/ApiProvider'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/Config';
import { collection, query, where, getDocs } from "firebase/firestore";
import { Fragment } from 'react';



const VerTareas = () => {

    const { user } = useContext(ApiContext)

    const [prueba, setPrueba] = useState("")



    // useEffect(() => {


    //     if (user.length !== 0) {

    //         console.log(user.tasks[0].fecha)//[0]tiene que mostrar todos los elementos
    //         const futuroTIempo = user.tasks[0].fecha.toDate()

    //         setPrueba(futuroTIempo);


    //         if (prueba !== undefined) {
    //             console.log(prueba);
    //         }
    //     }

    // }, [user])




    return (
        <div>
            <h1>VerTareas</h1>



        </div>
    )
}

export default VerTareas