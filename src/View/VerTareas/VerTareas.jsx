import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiContext';
import TaskListContainer from '../../Components/TaskListContainer/TaskListContainer';


const VerTareas = () => {

    const { user } = useContext(ApiContext)


    return (
        <div>
            <Link to={`/`}>
                <h1>HOME</h1>
            </Link>

            <h4>VerTareas</h4>


            <TaskListContainer userTasks={user.tasks} />
        </div>
    )
}

export default VerTareas