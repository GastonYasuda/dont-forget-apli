import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ApiContext } from '../../Context/ApiContext';
import { FaTrashAlt } from 'react-icons/fa';
import { ImCheckboxChecked } from 'react-icons/im';
import { ImCheckboxUnchecked } from 'react-icons/im';



const TaskList = ({ eachTask }) => {

    const { user, setUser, addTask } = useContext(ApiContext)


    const checkToggle = (i) => {
        eachTask.task[i].done = !eachTask.task[i].done

        setUser({ ...user, "tasks": user.tasks })
        localStorage.setItem('USUARIO', JSON.stringify({ ...user, "tasks": user.tasks }))
        addTask(user.id, "", user.tasks)
    }


    const clearTask = (i) => {

        for (const key in user.tasks) {

            let newTask = user.tasks

            if (newTask[key].fecha === eachTask.fecha) {
                newTask[key].task.splice(i, 1)
               
                if (Object.keys(newTask[key].task).length === 0) {
                    newTask.splice([key], 1)
                }
            }
        }


        setUser({ ...user, "tasks": user.tasks })
        localStorage.setItem('USUARIO', JSON.stringify({ ...user, "tasks": user.tasks }))
        addTask(user.id, "", user.tasks)
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
