import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { ApiContext } from '../../Context/ApiContext';
import { ToastContainer, toast } from 'react-toastify';
import ToastLogMesage from '../../Components/ToastLogMesage/ToastLogMesage';

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

            <div className='homeStyle__task b-radius-15'>
                <div onClick={isLoged}>
                    {
                        guestItem !== null ?
                            <Link to={`/asignar-tarea`}>
                                Assign task
                            </Link>
                            :
                            <Link to={`/`}>
                                Assign task
                            </Link>
                    }
                </div>
                <ToastContainer className="mar-top-25" />
            </div>


            <div className='homeStyle__quick b-radius-15'>

                <Link to={`/tarea-rapida`}>
                    Quick task
                </Link>
            </div>




        </div >
    )
}

export default Home