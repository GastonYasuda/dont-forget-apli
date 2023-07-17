import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { ApiContext } from '../../Context/ApiContext';
import LoginNormal from '../../Components/LoginNormal/LoginNormal';
import LoginRegist from '../LoginRegist/LoginRegist';
import RecoverPass from '../../Components/RecoverPass/RecoverPass';
import Home from '../Home/Home';


const Login = () => {


    const { checkUser,  someUser } = useContext(ApiContext)

    const [loginValues, setLoginValues] = useState('')
    const [passValue, setPassValue] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [continueOmit, setContinueOmit] = useState(false)

    //continueOmit seria con el boton omit si esta registrado o se registra


    const form = useRef();

    const {
        register,
        handleSubmit,
        getValues,
        reset,

        formState: { errors }
    } = useForm();


    useEffect(() => {
        if (someUser) {
            setContinueOmit(true)

        } else {
            if (loginValues.length !== 0) {
                checkUser(loginValues, passValue)
            }
        }
    }, [loginValues, passValue, someUser])



    const onSubmit = () => {
        setLoginValues(getValues("LoginName"))
        setPassValue(getValues("password"))
        reset()
    };




    return (
        <>

            {
                continueOmit ?
                    <Home setContinueOmit={setContinueOmit}/>
                    :
                    <form onSubmit={handleSubmit(onSubmit)} ref={form} >
                        <h4>Iniciar sesión</h4>

                        <LoginNormal setPassValue={setPassValue} setLoginValues={setLoginValues} register={register} errors={errors} />


                        <div>
                            <p>¿No tienes cuenta?</p>
                            <button onClick={() => { setShowModal(true) }}>REGISTRATE</button>
                            <LoginRegist showModal={showModal} setShowModal={setShowModal} />
                        </div>

                        <div>
                            <RecoverPass />
                        </div>

                        <button type='submit'>INGRESAR</button>

                        <button>
                            google
                        </button>

                        <button onClick={() => { setContinueOmit(true) }}>
                            Continue without login
                        </button>

                    </form >
            }

        </>
    )
}


export default Login