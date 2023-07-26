import React, { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ApiContext } from '../../Context/ApiContext';
import Swal from 'sweetalert2';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const LoginRegist = ({ showModal, setShowModal }) => {

    const { addNewUser } = useContext(ApiContext)

    const nickNameValue = useRef()
    const loginMailValue = useRef()
    const passwordValue = useRef()

    const onSubmit = () => {

        const nickName = nickNameValue.current.value
        const loginMail = loginMailValue.current.value
        const password = passwordValue.current.value

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
            setShowModal(true)
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

                            <form onSubmit={onSubmit}>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Nickname"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Nickname"
                                        ref={nickNameValue}
                                    />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com"
                                        ref={loginMailValue}
                                    />
                                </FloatingLabel>



                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password"
                                        ref={passwordValue}
                                    />
                                </FloatingLabel>

                            </form>

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
