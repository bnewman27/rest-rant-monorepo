import { createContext, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){
    useEffect(() => {

        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:6000/authentication/profile')
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])
}

export default CurrentUserProvider