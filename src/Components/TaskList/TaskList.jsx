import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaTrashAlt } from 'react-icons/fa';
import { ImCheckboxChecked } from 'react-icons/im';
import { ImCheckboxUnchecked } from 'react-icons/im';
import { ApiContext } from '../../Context/ApiContext';


const TaskList = ({ eachTask, userTasks }) => {

    const { user, setUser, addTask } = useContext(ApiContext)

    const checkToggle = (i) => {
        const newNew = [...eachTask.task]
        newNew[i].done = !newNew[i].done

        setUser({ ...user, "tasks": userTasks })//state
        localStorage.setItem('USUARIO', JSON.stringify({ ...user, "tasks": userTasks }))//local
        addTask(user.id, "", userTasks) //db
    }


    const clearTask = (i) => {

        for (const key in userTasks) {
            const userTask = [...user.tasks]

            if (userTask[key].fecha === eachTask.fecha) {

                userTask[key].task.splice(i, 1)

                if (userTask[key].task.length === 0) {
                    userTask.splice([key], 1)
                }
                setUser({ ...user, "tasks": userTask })//state
                localStorage.setItem('USUARIO', JSON.stringify({ ...user, "tasks": userTask }))//local
                addTask(user.id, "", userTask) //db
            }
        }
    }


    return (
        <div>
            {
                eachTask.task.map((task, i) => {
                    return (
                        <div key={i} >
                            <Form style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', padding: '5px' }}>

                                <Button onClick={() => { checkToggle(i) }}>
                                    {
                                        task.done ?
                                            <ImCheckboxChecked />
                                            :
                                            <ImCheckboxUnchecked />
                                    }
                                </Button>

                                <p style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.name}</p>

                                <Button onClick={() => { clearTask(i) }}>
                                    <FaTrashAlt />
                                </Button>

                            </Form>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default TaskList
