import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ApiContext } from '../../Context/ApiContext';
import { FaTrashAlt } from 'react-icons/fa';
import { ImCheckboxChecked } from 'react-icons/im';
import { ImCheckboxUnchecked } from 'react-icons/im';



const TaskList = ({ eachTask }) => {


    const { user, setUser, addTask } = useContext(ApiContext)



    const checkToggle = (i) => {
        eachTask[i].done = !eachTask[i].done


        setUser({ ...user, "tasks": user.tasks })
        localStorage.setItem('USUARIO', JSON.stringify({ ...user, "tasks": user.tasks }))
        addTask(user.id, "", user.tasks)
    }


    const clearTask = (i) => {

        const newTask = [...user.tasks]

        newTask.splice(i, 1)

        console.log(newTask);

        //  localStorage.setItem('USUARIO', JSON.stringify({ ...user, "tasks": user.tasks }))

    }


    return (
        <div>
            {
                eachTask.map((task, i) => {
                    return (
                        <div key={i}>
                            <Form>
                                {/* <Form.Check name={task.name} onChange={() => { checkToggle(i) }} /> */}


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
