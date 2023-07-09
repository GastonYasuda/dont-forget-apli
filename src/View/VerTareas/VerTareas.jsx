import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiContext';
import TaskListContainer from '../../Components/TaskListContainer/TaskListContainer';




const VerTareas = () => {

    const { user } = useContext(ApiContext)

    const [tasks, setTasks] = useState([])


    useEffect(() => {

        if (user.length !== 0) {
            try {
                setTasks(user.tasks);
            } catch (error) {
                console.log(error);
            }
        }
    }, [user, tasks])

    return (
        <div>
            <Link to={`/`}>
                <h1>HOME</h1>
            </Link>

            <h4>VerTareas</h4>

            {
                tasks !== undefined &&
                tasks.map((tas, i) => {
                    return (
                        <div key={i}>

                            <h1 >{tas.fecha}</h1>

                            <TaskListContainer taskList={tas.task} />

                        </div>
                    )
                })
            }

        </div>
    )
}

export default VerTareas