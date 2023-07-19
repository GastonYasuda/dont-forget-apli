import React, { useContext, useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ApiContext } from '../../Context/ApiContext';

const RecoverPass = () => {

    const { emailJS, searchPass, userPass } = useContext(ApiContext)

    const [showRecover, setShowRecover] = useState(false)

    const user_email = useRef()



    const onSubmit = () => {
        const mailValue = (user_email.current.value)

        searchPass(mailValue)

        try {

            const array = {
                user_name: userPass.nickname,
                message: userPass.password,
                mailto: mailValue
            }
            console.log(array);
            
            // emailJS(array)
            //COMENTADO ASI NO BUSCA TODO EL TIEMPO

            setShowRecover(false)

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <>
            <button onClick={() => { setShowRecover(true) }}>recuperar contraseña</button >

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

                            <input type="email" placeholder='Mail registrado' ref={user_email} name="user_email" />

                        </Modal.Body>

                        <Modal.Footer>

                            <Button variant="secondary" onClick={() => { setShowRecover(false) }}>Close</Button>
                            <Button variant="primary" onClick={() => { onSubmit() }}>Continue</Button>

                        </Modal.Footer>
                    </Modal>
                    :
                    null
            }
        </>
    )
}

export default RecoverPass
