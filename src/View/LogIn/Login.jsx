import React, { useContext, useEffect, useRef, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext';
import LoginNormal from '../../Components/LoginNormal/LoginNormal';
import LoginRegist from '../LoginRegist/LoginRegist';
import RecoverPass from '../../Components/RecoverPass/RecoverPass';
import Home from '../Home/Home';
import LoginGoogle from '../../Components/LoginGoogle/LoginGoogle';


const Login = () => {

    const { user, continueOmit, setContinueOmit } = useContext(ApiContext)

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('USUARIO')) !== null) {
            setContinueOmit(true)
        }

    }, [user, continueOmit])


    return (
        <div>
            {
                continueOmit ?
                    <Home />
                    :
                    <div className='login d-f-row '>

                        <div className='login__container d-f-col b-radius'>

                            <div className='loginTitle'>
                                <h4>LOG-IN</h4>
                            </div>

                            <LoginNormal />

                            <div className='createAccount d-f-row-center-center'>
                                <p>Create you account for free! </p>
                                <button className='signInButton' onClick={() => { setShowModal(true) }}>SIGN IN</button>
                                <LoginRegist showModal={showModal} setShowModal={setShowModal} />
                            </div>

                            <div>
                                <RecoverPass />
                            </div>

                            <div>
                                <LoginGoogle />
                            </div>

                            <button onClick={() => { setContinueOmit(true) }}>
                                Continue without login
                            </button>
                        </div>

                        <section className='login__img d-f-row-center-center'>
                            <img src="/assets/thinking.png" alt="women thinking" />
                        </section>
                    </div>
            }
        </div>
    )
}


export default Login