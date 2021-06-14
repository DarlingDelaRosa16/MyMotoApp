import react, {createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [contextState, setContextState] = useState('')

    const initialUser = ()=>{
        setContextState({nombre: "Darling", apellido: "Vanderhorst"})
    }
    const infoContext = {contextState, initialUser}
    
    return(
        <UserContext.Provider value={infoContext}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider}
export default UserContext;