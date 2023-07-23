import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { ApiContext } from '../../Context/ApiContext';
import Swal from 'sweetalert2';

const LoginRegist = ({ showModal, setShowModal }) => {

    const { addNewUser } = useContext(ApiContext)

    const {
        register,
        getValues,

        formState: { errors }
    } = useForm();



    const onSubmit = () => {

        const nickName = getValues("nickName")
        const loginMail = getValues("loginMail")
        const password = getValues("password")

        const haveAtSign = loginMail.includes("@")

        if (nickName === '' || loginMail === '' || password === '' || haveAtSign === false) {
            Swal.fire(
                'INCOMPLETE DATA!',
                'Please enter the correct data',
                'error'
            )
            setShowModal(false)

        } else {
            addNewUser(nickName, loginMail, password)

            Swal.fire(
                'REGIST COMPLETE!',
                'Welcome to don`t forget apli',
                'success'
            )
            setShowModal(false)
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
                            <Modal.Title>Sign-in form</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <input type='text' placeholder='Nickname' {...register("nickName", { required: true })} />
                            {errors?.LoginName?.type === "required" && <p>Incomplete field.</p>}


                            <input type='email' placeholder='Mail' {...register("loginMail", { required: true })} />
                            {errors?.loginMail?.type === "required" && <p>Incomplete field.</p>}

                            <input type='password' placeholder='Password' {...register("password", { required: true })} />
                            {errors?.password?.type === "required" && <p>Incomplete field.</p>}

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => { setShowModal(false) }}>Close</Button>
                            <Button variant="primary" onClick={() => { onSubmit() }}>Regist</Button>

                        </Modal.Footer>
                    </Modal>

                    :
                    null
            }
        </div >
    )
}

export default LoginRegist
