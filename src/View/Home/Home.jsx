import React, { useContext, useEffect } from 'react'
import useFirebase from '../../Hook/useFirebase'
import { ApiContext } from '../../Context/ApiProvider'

const Home = () => {

    const [user] = useFirebase()

    const { prueba } = useContext(ApiContext)

    useEffect(() => {
        if (user.length !== 0) {

            console.log(user);
            prueba()
        }
    }, [user])


    return (
        <div>Home</div>
    )
}

export default Home