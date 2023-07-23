import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiContext';
import TaskListContainer from '../../Components/TaskListContainer/TaskListContainer';
import moment from 'moment';
import 'moment/locale/es-mx';
moment.locale('es-mx')

const AsignarTarea = () => {

    const [inputDate, setInputDate] = useState("")
    const [inputValue, setInputValue] = useState("")

    const { addNewTask } = useContext(ApiContext)

    useEffect(() => {
        console.log("entro");
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()

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
                <input type='text' onChange={e => setInputValue(e.target.value)} value={inputValue} />
                <button>ok</button>
            </form>

            <TaskListContainer />

        </div>
    )
}

export default AsignarTarea
