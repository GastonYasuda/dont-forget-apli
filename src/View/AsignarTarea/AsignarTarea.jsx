import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es-mx';
import { ApiContext } from '../../Context/ApiContext';
import TaskListContainer from '../../Components/TaskListContainer/TaskListContainer';

moment.locale('es-mx')

const AsignarTarea = () => {

    const [inputDate, setInputDate] = useState("")
    const [inputValue, setInputValue] = useState("")

    const { user, addNewTask } = useContext(ApiContext)






    const handleSubmit = (e) => {
        e.preventDefault()


        //addNewTask('', moment(inputDate).format('l'), inputValue)

        addNewTask(moment(inputDate).format('l'), inputValue)

        setInputDate('')
        setInputValue('')
    }

    return (
        <div>
            <Link to={`/`}>
                <h1>HOME</h1>
            </Link>

            <h4>AsignarTarea</h4>
            <form onSubmit={handleSubmit}>
                <input type="date" onChange={e => setInputDate(e.target.value)} value={inputDate} />
                <input type='text' onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder='Task' />
                <button>ok</button>
            </form>

            <TaskListContainer userTasks={user.tasks} />

        </div>
    )
}

export default AsignarTarea
