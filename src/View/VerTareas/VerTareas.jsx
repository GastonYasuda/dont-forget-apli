import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiProvider';




const VerTareas = () => {

    const { user, getByDate } = useContext(ApiContext)




    useEffect(() => {


        if (user !== undefined) {

            // console.log(user);
            // console.log(user.tasks);
            try {
                getByDate()
            } catch (error) {
                console.log(error);
            }
        }

    }, [user])




    return (
        <div>
            <Link to={`/`}>
                <h1>HOME</h1>
            </Link>


            <h4>VerTareas</h4>



        </div>
    )
}

export default VerTareas