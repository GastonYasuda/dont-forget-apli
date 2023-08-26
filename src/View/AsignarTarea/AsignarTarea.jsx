import React from 'react'
import TaskListContainer from '../../Components/TaskListContainer/TaskListContainer';
import Navbar from '../Navbar/Navbar';
import './asignarTarea.css'
import FormInput from '../../Components/FormInput/FormInput';



const AsignarTarea = () => {

    return (
        <div className='loginBody'>
            <Navbar />

            <section className='assignForm-body'>

                <FormInput />   

                <TaskListContainer />

            </section>


        </div>
    )
}

export default AsignarTarea
