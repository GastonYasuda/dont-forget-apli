import React, { useEffect } from 'react'

const TaskListContainer = ({ taskList }) => {

    useEffect(() => {
        console.log(taskList.tasks);
    }, [])

    return (
        <div>
            {
                taskList.tasks.map((tali, i) => {
                    return (
                        <div key={i}>
                            <p>{tali.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TaskListContainer