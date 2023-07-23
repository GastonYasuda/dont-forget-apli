import React, { useRef } from 'react'
import { useForm } from "react-hook-form";

const LoginNormal = ({ register, errors }) => {


    return (
        <>
            <input type='email' placeholder='Mail'  {...register("LoginName", { required: true })} />
            {errors?.LoginName?.type === "required" && <p>Incomplete field.</p>}


            <input type='password' placeholder='Contraseña' {...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors?.password?.type === "required" && <p>Incomplete field.</p>}
        </>
    )
}

export default LoginNormal