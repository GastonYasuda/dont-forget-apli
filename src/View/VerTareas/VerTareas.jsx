import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiProvider';
import TaskListContainer from '../../Components/TaskListContainer/TaskListContainer';




const VerTareas = () => {

    const { user } = useContext(ApiContext)

    const [tasks, setTasks] = useState([])


    useEffect(() => {
        // termo()
        // getByDate()

        if (user.length !== 0) {

            try {

                setTasks(user.task);


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
            <h1>hola</h1>

            {
                tasks.map((tas, i) => {
                    return (
                        <div key={i}>

                            <h1 >{tas.fecha}</h1>

                            <TaskListContainer taskList={tas} />

                        </div>
                    )
                })
            }

        </div>
    )
}

export default VerTareas