import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase/Config';


const useFirebase = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        try {
            const getUser = async () => {
                const querySnapshot = await getDocs(collection(db, "user"));
                querySnapshot.forEach((doc) => {

                    const usuario = {
                        id: doc.id,
                        ...doc.data()
                    }
                    setUser(usuario)
                });

            }

            getUser()


        } catch (error) {
            console.log(error);
        }

    }, [])


    return [user]
}

export default useFirebase