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

   
    const handleDateChange = (e) => {
        console.log(e.target.value);
        console.log(typeof (e.target.value));


        setInputDate(e.target.value)
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

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
                <input type="date" onChange={handleDateChange} value={inputDate} />
                <input type='text' onChange={handleInputChange} value={inputValue} />
                <button>ok</button>
            </form>

            <TaskListContainer userTasks={user.tasks} />

        </div>
    )
}

export default AsignarTarea
