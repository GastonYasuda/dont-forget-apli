import React, { useContext, useRef, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const LoginNormal = () => {

    const { checkUser } = useContext(ApiContext)

    const [loginMailValue, setLoginNameValue] = useState('')
    const [loginPasswordValue, setLoginPasswordValue] = useState('')

    const loginName = useRef()
    const password = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        checkUser(loginMailValue, password.current.value)
        setLoginNameValue('')
        setLoginPasswordValue('')
    };


    return (
        <form onSubmit={onSubmit}>

            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3">

                <Form.Control type="email" placeholder="name@example.com"
                    ref={loginName}
                    onChange={e => { setLoginNameValue(loginName.current.value) }}
                    value={loginMailValue} />

            </FloatingLabel>


            <FloatingLabel controlId="floatingPassword" label="Password">

                <Form.Control type="password" placeholder="Password"
                    ref={password}
                    onChange={e => { setLoginPasswordValue(password.current.value) }}
                    value={loginPasswordValue} />

            </FloatingLabel>

            <Button type='submit' className='enterButton'>Enter</Button>
        </form>
    )
}

export default LoginNormal