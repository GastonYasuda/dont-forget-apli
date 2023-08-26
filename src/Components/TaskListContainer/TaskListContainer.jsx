import React, { useContext, useEffect, useState } from 'react'
import TaskList from '../TaskList/TaskList';
import { ApiContext } from '../../Context/ApiContext';
import Card from 'react-bootstrap/Card';
import './taskListContainer.css'

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
        <div className='card__style' >
            {
                userTasks.map((tasks, i) => {
                    return (
                        <Card  key={i}>
                            <Card.Body style={{ flex: '0', flexRow: 'row' }}>
                                <Card.Title>{tasks.fecha}</Card.Title>
                            </Card.Body>

                            <TaskList eachTask={tasks} userTasks={userTasks} />
                        </Card>
                    )
                })
            }

        </div >
    )
}

export default TaskListContainer