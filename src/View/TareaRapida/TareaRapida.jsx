import React, { useRef, useState } from 'react'
import QuickTask from '../../QuickTask/QuickTask';
import './tareaRapida.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Navbar from '../Navbar/Navbar';
import '../AsignarTarea/asignarTarea.css'



const TareaRapida = () => {

    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([])
    const taskInput = useRef(null);

    const handleSubmit = (e) => {

        e.preventDefault()
        addTask(newTask)
        setNewTask('')
        taskInput.current?.focus()
    }

    const addTask = (name) => {
        const newTasks = [...tasks, { name, done: false }]
        setTasks(newTasks)
    }


    return (
        <div className='loginBody'>

            <Navbar />
            <section className='assignForm-body'>

                <div className='assignForm b-radius-15'>
                    <div className='assignForm__container'>

                        <h4>Quick task</h4>

                        <form onSubmit={handleSubmit} className='assignForm__container-items d-f-row'>
                            <FloatingLabel controlId="floatingInput"
                                label="Task"
                                className='floatingInput__task'
                            >
                                <Form.Control type="text" placeholder="Task" onChange={e => setNewTask(e.target.value)} value={newTask} />
                            </FloatingLabel>
                            <Button type='submit'>Add</Button>
                        </form>
                    </div>
                </div>
                <QuickTask tasks={tasks} setTasks={setTasks} />
            </section>

        </div>
    )
}

export default TareaRapida