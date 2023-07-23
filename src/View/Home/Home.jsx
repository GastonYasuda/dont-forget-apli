import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { ApiContext } from '../../Context/ApiContext';
import { ToastContainer, toast } from 'react-toastify';
import ToastLogMesage from '../../Components/ToastLogMesage/ToastLogMesage';

const Home = () => {

    const { logOut } = useContext(ApiContext)

    const [notLog, setNotLog] = useState(false)

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
        <div className='centrar'>

            <Link to={`/`}>
                <h1>HOME</h1>
            </Link>


            <button onClick={isLoged}>
                {
                    guestItem !== null ?
                        <Link to={`/asignar-tarea`}>
                            ASIGNAR TAREA
                        </Link>
                        :
                        <Link to={`/`}>
                            ASIGNAR TAREA
                        </Link>
                }
            </button>







            <Link to={`/tarea-rapida`}>
                Quick task
            </Link>

            <Button onClick={logOut} >
                {
                    guestItem !== null ?
                        "log-OUT"
                        :
                        " LOG-in"
                }
            </Button>

            <ToastContainer className="mar-top-25" />

        </div>
    )
}

export default Home