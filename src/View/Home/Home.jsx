import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import ToastLogMesage from '../../Components/ToastLogMesage/ToastLogMesage';
import './home.css'

const Home = () => {


    const [guestItem, setGuestItem] = useState([])

    useEffect(() => {
        setGuestItem(JSON.parse(localStorage.getItem('USUARIO')))
    }, [])

    const notify = () => {
        toast.info(ToastLogMesage, { autoClose: 2000 })
    }

    const isLoged = () => {

        if (guestItem === null) {
            notify()
        }
    }


    return (
        <div className='homeStyle d-f-row'>

            <div className='homeStyle__task '>
                <div onClick={isLoged} className='homeStyle__task-card b-radius-15'>
                    {
                        guestItem !== null ?
                            <Link to={`/asignar-tarea`} className='d-f-col card-justify'>
                                <div>
                                    <span>ASSIGN TASK</span>
                                </div>
                                <div>
                                    <img src="./assets/tasks-bg.png" className='imagen' alt="tasks background img" />
                                </div>
                                <div>
                                    <p>Here you can create a list of tasks where you can add it with date.
                                        You can check or delete these tasks and they are saved for when you enter again.
                                        <br />You must be logged in to use this option.</p>
                                </div>
                            </Link>
                            :
                            <Link to={`/`}>
                                <span>ASSIGN TASK</span>
                            </Link>
                    }
                    <div className='card-bg '>
                        <img src="./assets/tasks-bg.png" className='card-bg-img' alt="tasks img" />
                    </div>
                </div>
                <ToastContainer className="mar-top-25" />
            </div>


            <div className='homeStyle__task'>
                <div className='homeStyle__task-card b-radius-15'>
                    <Link to={`/tarea-rapida`} className='d-f-col card-justify'>
                        <div>
                            <span>QUICK TASKS</span>
                        </div>
                        <div>
                            <img src="./assets/quick_tasks-bg.png" className='imagen' alt="quick tasks img" />
                        </div>
                        <div>
                            <p>Here you can create tasks quickly to have a list to use at that time.</p>
                        </div>

                    </Link>

                    <div className='card-bg '>
                        <img src="./assets/quick_tasks-bg.png" className='card-bg-img' alt="quick tasks background img" />
                    </div>

                </div>
            </div>




        </div >
    )
}

export default Home