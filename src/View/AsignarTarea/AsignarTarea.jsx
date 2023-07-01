import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es-mx';

moment.locale('es-mx')

const AsignarTarea = () => {

    const [date, setDate] = useState("")


    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(moment(date).format('l'));
        setDate('')
    }
    return (
        <div>
            <Link to={`/`}>
                <h1>HOME</h1>
            </Link>

            <h4>AsignarTarea</h4>
            <form onSubmit={handleSubmit}>
                <input type="date" onChange={handleDateChange} />
                <button>ok</button>
            </form>
        </div>
    )
}

export default AsignarTarea
