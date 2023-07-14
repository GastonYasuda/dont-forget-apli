import React, { useState } from 'react'
import TaskList from '../TaskList/TaskList';

const TaskListContainer = ({ userTasks }) => {



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