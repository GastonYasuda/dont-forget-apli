import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';


const LoginGoogle = ({ setGoogleUser }) => {


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


    const onSuccess = (response) => {
        console.log(response);
        setGoogleUser(response.profileObj)
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
