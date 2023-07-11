import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../../Context/ApiContext'
import TaskList from '../TaskList/TaskList';

const TaskListContainer = ({ userTasks }) => {

    return (
        <div>

            {
                userTasks !== undefined &&
                userTasks.map((tasks, i) => {
                    return (
                        <div key={i}>
                            <h1>{tasks.fecha}</h1>
                            <TaskList eachTask={tasks.task} />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default TaskListContainer