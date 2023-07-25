import React, { useContext, useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
// import GoogleLogin from 'react-google-login';
import { ApiContext } from '../../Context/ApiContext';
import { GoogleLogin } from '@leecheuk/react-google-login';


const LoginGoogle = () => {


    const { checkUser, createGoogleUser, addNewUser, user } = useContext(ApiContext)
    const [googleUser, setGoogleUser] = useState([])

    const clientId = "161183558472-blt42q3k8ld75odcqb44v8g99gbg5mr9.apps.googleusercontent.com"

    useEffect(() => {
        try {

            const start = () => {
                gapi.auth2.init({
                    clientId: clientId,
                })
            }
            gapi.load("client:auth2", start);

        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        if (createGoogleUser) {

            if (googleUser.length !== 0) {

                addNewUser(googleUser.givenName, googleUser.email, googleUser.googleId)
            }


        }
    }, [googleUser, createGoogleUser])



    const onSuccess = (response) => {
        const googleU = response.profileObj

        setGoogleUser(response.profileObj)
        checkUser(googleU.email, googleU.googleId)

    }

    const onFailure = (error) => {
        console.log(error);

    }


    return (

        <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
                <button className="redesStyle-item" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <img src="./Google.png" alt="google" />
                </button>
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
        />
    )
}

export default LoginGoogle
