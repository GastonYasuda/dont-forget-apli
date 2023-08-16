import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaTrashAlt } from 'react-icons/fa';
import { ImCheckboxChecked } from 'react-icons/im';
import { ImCheckboxUnchecked } from 'react-icons/im';
import { ApiContext } from '../../Context/ApiContext';
import ListGroup from 'react-bootstrap/ListGroup';



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
                        <ListGroup className="list-group-flush" key={i}>
                            <Form >
                                <ListGroup.Item style={{ margin: '0 0 15px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>


                                    <p style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.name}</p>

                                    <div>
                                        <Button onClick={() => { checkToggle(i) }} >
                                            {
                                                task.done ?
                                                    <ImCheckboxChecked />
                                                    :
                                                    <ImCheckboxUnchecked />
                                            }
                                        </Button>

                                        <Button onClick={() => { clearTask(i) }} style={{ marginLeft: '5px' }}>
                                            <FaTrashAlt />
                                        </Button>
                                    </div>


                                </ListGroup.Item>
                            </Form>
                        </ListGroup>



                    )
                })
            }
        </div >
    )
}

export default TaskList
