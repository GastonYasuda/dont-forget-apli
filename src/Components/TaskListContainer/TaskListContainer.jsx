import React, { useContext, useEffect, useState } from 'react'
import TaskList from '../TaskList/TaskList';
import { ApiContext } from '../../Context/ApiContext';

const TaskListContainer = () => {


    const [userTasks, setUserTasks] = useState([])

    const { user } = useContext(ApiContext)
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('USUARIO'))
        if (item !== null) {

            setUserTasks(item.tasks)
        }
    }, [user])


    return (
        <div>
            {
                userTasks.length !== 0 &&
                userTasks.map((tasks, i) => {
                    return (
                        <div key={i} >
                            <h1>{tasks.fecha}</h1>
                            <TaskList eachTask={tasks} userTasks={userTasks} />
                        </div>
                    )
                })
            }

        </div >
    )
}

export default TaskListContainer