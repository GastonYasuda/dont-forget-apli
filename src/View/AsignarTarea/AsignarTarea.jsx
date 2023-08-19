import React, { useContext, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext';
import TaskListContainer from '../../Components/TaskListContainer/TaskListContainer';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Navbar from '../Navbar/Navbar';
import './asignarTarea.css'
import moment from 'moment';
import 'moment/locale/es-mx';
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

            <section className='assignForm-body'>

                <div className='assignForm b-radius-15'>
                    <div className='assignForm__container'>
                        <h4 className='title'>Assign task</h4>
                        <form onSubmit={handleSubmit} className='assignForm__container-items d-f-row'>

                            <FloatingLabel controlId="floatingInput" label="Date">
                                <Form.Control type="date" placeholder="Date"  onChange={e => setInputDate(e.target.value)} value={inputDate} />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Task"
                                className=" "
                            >
                                <Form.Control type="text" placeholder="Task" onChange={e => setInputValue(e.target.value)} value={inputValue} />
                            </FloatingLabel>

                            <Button type='submit'>ok</Button>

                        </form>
                    </div>

                </div>

                <TaskListContainer />

            </section>


        </div>
    )
}

export default AsignarTarea
