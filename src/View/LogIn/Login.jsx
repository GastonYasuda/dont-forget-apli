import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { ApiContext } from '../../Context/ApiContext';


const Login = () => {

    const { checkUser } = useContext(ApiContext)

    const [loginValues, setLoginValues] = useState('')
    const [passValue, setPassValue] = useState('')

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors }
    } = useForm();


    useEffect(() => {

        if (loginValues.length !== 0) {
            console.log(loginValues);
            console.log(passValue);
            checkUser(loginValues, passValue)
            // funcion que me diga si existe el usuario
        }
    }, [loginValues, passValue])




    const onSubmit = (data) => {

        setLoginValues(getValues("LoginName"))
        setPassValue(getValues("password"))
        reset()

    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Iniciar sesión</h4>


                <input type='email' placeholder='Mail'  {...register("LoginName", { required: true })} />
                {errors?.LoginName?.type === "required" && <p>Campo incompleto.</p>}


                <input type='password' placeholder='Contraseña' {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors?.password?.type === "required" && <p>Campo incompleto.</p>}


                <p>¿No tienes cuenta?</p>

                <button>REGISTRATE</button>
                <button>recuperar contraseña</button>

                <button type='submit'>INGRESAR</button>

                <button>
                    google
                </button>

            </form>
        </div >
    )
}

export default Login