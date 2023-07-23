import React, { useContext, useEffect, useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ApiContext } from '../../Context/ApiContext';
import Swal from 'sweetalert2'

const RecoverPass = () => {

    const { emailJS, searchPass, userPass } = useContext(ApiContext)

    const [showRecover, setShowRecover] = useState(false)
    const [mailValue, setMailValue] = useState('')

    const user_email = useRef()

    useEffect(() => {
        if (userPass.length !== 0) {

            try {
                const array = {
                    user_name: userPass.nickname,
                    message: userPass.password,
                    mailto: mailValue
                }

                // emailJS(array)
                Swal.fire({
                    icon: 'success',
                    title: 'Your password has been sent!',
                    showConfirmButton: false,
                    timer: 1500
                })

                setShowRecover(false)

            } catch (error) {

                console.log(error);


            }
        }

    }, [userPass])



    const onSubmit = () => {

        const getMailValue = (user_email.current.value)

        setMailValue(getMailValue)
        searchPass(getMailValue)

        const haveAtSign = getMailValue.includes("@")

        if (haveAtSign === true) {
            setMailValue(getMailValue)
            searchPass(getMailValue)
        }
        setShowRecover(false)
    };

    return (
        <>
            <button onClick={() => { setShowRecover(true) }}>Recover password</button >

            {
                showRecover ?
                    <Modal className='modal-content-mg-top '
                        show={showRecover}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header>
                            <Modal.Title>Recover password</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <input type="email" placeholder='Regist mail' ref={user_email} name="user_email" />

                        </Modal.Body>

                        <Modal.Footer>

                            <Button variant="secondary" onClick={() => { setShowRecover(false) }}>Close</Button>
                            <Button variant="primary" onClick={() => { onSubmit() }}>Send</Button>

                        </Modal.Footer>
                    </Modal>
                    :
                    null
            }
        </>
    )
}

export default RecoverPass
