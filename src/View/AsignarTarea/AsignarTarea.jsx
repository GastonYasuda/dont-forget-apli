import React, { useState } from 'react'
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
            <h1>AsignarTarea</h1>
            <form onSubmit={handleSubmit}>
                <input type="date" onChange={handleDateChange} />
                <button>ok</button>
            </form>
        </div>
    )
}

export default AsignarTarea
