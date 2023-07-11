import React, { useEffect } from 'react'

const TaskList = ({ eachTask }) => {


    return (
        <div>

            {
                eachTask.map((task, i) => {
                    return (
                        <div key={i}>
                            <p>{task.name}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default TaskList
