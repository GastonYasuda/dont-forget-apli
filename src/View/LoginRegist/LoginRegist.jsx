import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import GenerateNewUser from '../../Service/GenerateNewUser';
import { ApiContext } from '../../Context/ApiContext';


const LoginRegist = ({ showModal, setShowModal }) => {

    const { addUser } = useContext(ApiContext)

    const {
        register,
        handleSubmit,
        getValues,
        reset,

        formState: { errors }
    } = useForm();


    const onSubmit = () => {

        try {
            const newUserSet = GenerateNewUser({
                nickname: getValues("nickName"),
                loginMail: getValues("loginMail"),
                password: getValues("password")
            })

            addUser(newUserSet);


        } catch (error) {
            console.log(error);
        }

    };


    return (
        <div>

            {
                showModal ?

                    <Modal className='modal-content-mg-top '
                        show={showModal}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header>
                            <Modal.Title>Register form</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <input type='text' placeholder='Nickname' {...register("nickName", { required: true })} />
                            {errors?.LoginName?.type === "required" && <p>Campo incompleto.</p>}

                            <input type='email' placeholder='Mail' {...register("loginMail", { required: true })} />
                            {errors?.LoginName?.type === "required" && <p>Campo incompleto.</p>}

                            <input type='password' placeholder='Password' {...register("password", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors?.password?.type === "required" && <p>Campo incompleto.</p>}
                        </Modal.Body>

                        <Modal.Footer>

                            <Button variant="secondary" onClick={() => { setShowModal(false) }}>Close</Button>
                            <Button variant="primary" onClick={() => { onSubmit() }}>Save changes</Button>

                        </Modal.Footer>
                    </Modal>
                    :
                    null
            }
        </div >
    )
}

export default LoginRegist
