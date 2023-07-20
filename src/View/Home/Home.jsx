import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { ApiContext } from '../../Context/ApiContext';


const Home = () => {

    const {  logOut } = useContext(ApiContext)



    return (
        <div className='centrar'>

            <Link to={`/`}>
                <h1>HOME</h1>
            </Link>

            <Link to={`/asignar-tarea`}>
                ASIGNAR TAREA
            </Link>

            <Link to={`/ver-tarea`}>
                VER TAREA
            </Link>

            <Link to={`/tarea-rapida`}>
                TAREA RAPIDA
            </Link>

            <Button onClick={logOut} >
                log-out
            </Button>


        </div>
    )
}

export default Home