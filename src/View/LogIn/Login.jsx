import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { ApiContext } from '../../Context/ApiContext';
import LoginNormal from '../../Components/LoginNormal/LoginNormal';
import LoginRegist from '../LoginRegist/LoginRegist';
import RecoverPass from '../../Components/RecoverPass/RecoverPass';
import Home from '../Home/Home';
import LoginGoogle from '../../Components/LoginGoogle/LoginGoogle';


const Login = () => {

    const { checkUser, user, continueOmit, setContinueOmit, getLocal } = useContext(ApiContext)

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

    }, [user, continueOmit])



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
                        <h4>LOG-IN</h4>

                        <LoginNormal register={register} errors={errors} />
                        <div>
                            <div>
                                <div>
                                    <p>Create you account for free! </p>
                                    <button onClick={() => { setShowModal(true) }}>SIGN IN</button>
                                    <LoginRegist showModal={showModal} setShowModal={setShowModal} />
                                    {/* DESPUES DE REGISTRAR SETCONTINUEOMIT TIENE QUE SER TRUE */}

                                </div>

                                <div>
                                    <RecoverPass />
                                </div>

                                <button type='submit'>ENTER</button>

                                <div>
                                    <LoginGoogle />
                                </div>

                                <button onClick={() => { setContinueOmit(true) }}>
                                    Continue without login
                                </button>
                            </div>
                        </div>
                    </form>
            }

        </>
    )
}


export default Login