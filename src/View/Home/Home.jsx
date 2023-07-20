import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { ApiContext } from '../../Context/ApiContext';
import { ToastContainer, toast } from 'react-toastify';
import ToastLogMesage from '../../Components/ToastLogMesage/ToastLogMesage';

const Home = () => {

    const { logOut } = useContext(ApiContext)

    const [notLog, setNotLog] = useState(false)

    useEffect(() => {

        if (JSON.parse(localStorage.getItem('USUARIO') === null)) {
            console.log("no esta logueado");
            setNotLog(true)
        }

    }, [])
    const notify = () => {
        toast.info(ToastLogMesage, { autoClose: 2000 })
    }

    const isLoged = () => {
        if (notLog) {
            console.log("debe loguearse");
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
                    notLog ?
                        <Link to={`/`}>
                            ASIGNAR TAREA
                        </Link>
                        : <Link to={`/asignar-tarea`}>
                            ASIGNAR TAREA
                        </Link>
                }
            </button>







            <Link to={`/tarea-rapida`}>
                TAREA RAPIDA
            </Link>

            <Button onClick={logOut} >
                {
                    notLog ?
                        " LOG-IN"
                        :
                        "log-out"

                }
            </Button>

            <ToastContainer className="mar-top-25" />

        </div>
    )
}

export default Home