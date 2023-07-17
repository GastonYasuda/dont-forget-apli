import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


const Home = ({ setContinueOmit }) => {



    const logout = () => {
        localStorage.removeItem("USUARIO")
        setContinueOmit(false)
    }

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

            <Button onClick={logout} >
                log-out
            </Button>


        </div>
    )
}

export default Home