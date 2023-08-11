import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ApiContext } from '../../Context/ApiContext';
import { ToastContainer, toast } from 'react-toastify';
import ToastLogMesage from '../../Components/ToastLogMesage/ToastLogMesage';
import './home.css'

const Home = () => {

    const { logOut } = useContext(ApiContext)

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
                            <Link to={`/asignar-tarea`}>
                                <span>ASSIGN TASK</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, consequuntur reprehenderit asperiores esse blanditiis rerum architecto maxime quas error distinctio, aut facere eaque impedit voluptate nisi rem adipisci, nobis cum.</p>
                            </Link>
                            :
                            <Link to={`/`}>
                                <span>ASSIGN TASK</span>
                            </Link>
                    }
                </div>
                <ToastContainer className="mar-top-25" />
            </div>


            <div className='homeStyle__task'>
                <div className='homeStyle__task-card quickColor b-radius-15'>
                    <Link to={`/tarea-rapida`}>
                        <span>QUICK TASKS</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, consequuntur reprehenderit asperiores esse blanditiis rerum architecto maxime quas error distinctio, aut facere eaque impedit voluptate nisi rem adipisci, nobis cum.</p>
                    </Link>

                </div>
            </div>




        </div >
    )
}

export default Home