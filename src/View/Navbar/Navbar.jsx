import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { ApiContext } from '../../Context/ApiContext';
import './navbar.css'

const Navbar = () => {

    const { logOut, user } = useContext(ApiContext)

    const [guestItem, setGuestItem] = useState([])


    useEffect(() => {
        setGuestItem(JSON.parse(localStorage.getItem('USUARIO')))
    }, [user])

    return (
        <div className='navbar'>
            <section className='navbar__container d-f-row'>
                <Link to={'/'} >
                    <div className='logo'>
                        <img src="./assets/logo.svg" alt="dont forget apli logo" />
                    </div>
                </Link>


                {
                    guestItem !== null ?
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                <div className='login'>
                                    <img src="./assets/login.png" alt="login logo" />
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>

                                <Dropdown.ItemText>
                                    <span className='welcome'>Welcome {guestItem.nickname}!!!</span>
                                </Dropdown.ItemText>

                                <Dropdown.Item>
                                    <Link to="/asignar-tarea" className='dropMenuItem'>
                                        Assign task
                                    </Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link to="/tarea-rapida" className='dropMenuItem'>
                                        Quick task
                                    </Link>
                                </Dropdown.Item>


                                <Dropdown.Divider />



                                <Dropdown.Item>

                                    <span onClick={logOut} >
                                        log-out
                                    </span>

                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        :
                        ''
                }
            </section>
        </div>
    )
}

export default Navbar