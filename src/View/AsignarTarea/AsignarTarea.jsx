import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es-mx';
import { ApiContext } from '../../Context/ApiContext';

moment.locale('es-mx')

const AsignarTarea = () => {

    const [date, setDate] = useState("")
    const [inputValue, setInputValue] = useState("")


    const { addTask } = useContext(ApiContext)

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(moment(date).format('l'));
        console.log(inputValue);
        setDate('')
        setInputValue('')
        addTask(moment(date).format('l'), inputValue)
    }

    return (
        <div>
            <Link to={`/`}>
                <h1>HOME</h1>
            </Link>

            <h4>AsignarTarea</h4>
            <form onSubmit={handleSubmit}>
                <input type="date" onChange={handleDateChange} value={date} />
                <input type='text' onChange={handleInputChange} value={inputValue} />
                <button>ok</button>
            </form>
        </div>
    )
}

export default AsignarTarea
