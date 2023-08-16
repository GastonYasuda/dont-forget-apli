import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ApiContext } from '../../Context/ApiContext';
import TaskListContainer from '../../Components/TaskListContainer/TaskListContainer';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import 'moment/locale/es-mx';
import Button from 'react-bootstrap/esm/Button';
import Navbar from '../Navbar/Navbar';
moment.locale('es-mx')


const AsignarTarea = () => {

    const [inputDate, setInputDate] = useState("")
    const [inputValue, setInputValue] = useState("")

    const { addNewTask } = useContext(ApiContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        addNewTask(moment(inputDate).format('l'), inputValue)

        setInputDate('')
        setInputValue('')
    }


    return (
        <div className='loginBody'>
            <Navbar />

            <h4>AsignarTarea</h4>
            <form onSubmit={handleSubmit}>

                <FloatingLabel controlId="floatingInput" label="Date">
                    <Form.Control type="date" placeholder="Date" onChange={e => setInputDate(e.target.value)} value={inputDate} />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Task"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Task" onChange={e => setInputValue(e.target.value)} value={inputValue} />
                </FloatingLabel>



                <Button type='submit'>ok</Button>

            </form>

            <TaskListContainer />

        </div>
    )
}

export default AsignarTarea
