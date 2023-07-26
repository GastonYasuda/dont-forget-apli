import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import QuickTask from '../../QuickTask/QuickTask';


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
        <div>
            
            <Link to={`/`}>
                <h1>HOME</h1>
            </Link>
            <h4>Quick task</h4>

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask} placeholder='Task' />
                <button>ok</button>
            </form>

            <QuickTask tasks={tasks} setTasks={setTasks} />

        </div>
    )
}

export default TareaRapida