import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


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

        </div>
    )
}

export default Home