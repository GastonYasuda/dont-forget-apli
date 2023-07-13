import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import TaskList from '../TaskList/TaskList';

const TaskListContainer = ({ userTasks }) => {

    const { user } = useContext(ApiContext)

    // useEffect(() => {

    //     for (const key in user.tasks) {
    //         if (Object.keys(user.tasks[key].task).length === 0) {
    //             console.log("no hay");

    //             user.tasks.splice([key], 1)
    //         }
    //     }

    // }, [user])


    return (
        <div>
            {
                userTasks !== undefined &&
                userTasks.map((tasks, i) => {
                    return (
                        <div key={i} >
                            <h1>{tasks.fecha}</h1>
                            <TaskList eachTask={tasks} />
                        </div>
                    )
                })
            }

        </div >
    )
}

export default TaskListContainer