import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { ApiContext } from '../../Context/ApiContext';
import LoginNormal from '../../Components/LoginNormal/LoginNormal';
import LoginRegist from '../LoginRegist/LoginRegist';
import RecoverPass from '../../Components/RecoverPass/RecoverPass';
import Home from '../Home/Home';
import Swal from 'sweetalert2';
import LoginGoogle from '../../Components/LoginGoogle/LoginGoogle';


const Login = () => {

    const { checkUser, user, addNewUser, continueOmit, setContinueOmit, getLocal } = useContext(ApiContext)

    const [showModal, setShowModal] = useState(false)




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
        getLocal()


    }, [user])



    const onSubmit = () => {

        checkUser(getValues("LoginName"), getValues("password"))

        reset()
    };




    return (
        <>

            {
                continueOmit ?
                    <Home />
                    :
                    <form onSubmit={handleSubmit(onSubmit)} ref={form} >
                        <h4>Iniciar sesión</h4>

                        <LoginNormal register={register} errors={errors} />


                        <div>
                            <p>¿No tienes cuenta?</p>
                            <button onClick={() => { setShowModal(true) }}>REGISTRATE</button>
                            <LoginRegist showModal={showModal} setShowModal={setShowModal} />
                            {/* DESPUES DE REGISTRAR SETCONTINUEOMIT TIENE QUE SER TRUE */}
                        </div>

                        <div>
                            <RecoverPass />
                        </div>

                        <button type='submit'>INGRESAR</button>

                        <div>
                            <LoginGoogle />
                        </div>

                        <button onClick={() => { setContinueOmit(true) }}>
                            Continue without login
                        </button>

                    </form >
            }

        </>
    )
}


export default Login