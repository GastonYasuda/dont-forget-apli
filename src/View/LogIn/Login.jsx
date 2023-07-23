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
        <>
            {
                continueOmit ?
                    <Home />
                    :
                    <div>
                        <h4>LOG-IN</h4>

                        <LoginNormal />

                        <div>
                            <p>Create you account for free! </p>
                            <button onClick={() => { setShowModal(true) }}>SIGN IN</button>
                            <LoginRegist showModal={showModal} setShowModal={setShowModal} />
                            {/* DESPUES DE REGISTRAR SETCONTINUEOMIT TIENE QUE SER TRUE */}

                        </div>

                        <div>
                            <RecoverPass />
                        </div>

                        {/* <button type='submit'>ENTER</button> */}

                        <div>
                            <LoginGoogle />
                        </div>

                        <button onClick={() => { setContinueOmit(true) }}>
                            Continue without login
                        </button>

                    </div>
            }

        </>
    )
}


export default Login