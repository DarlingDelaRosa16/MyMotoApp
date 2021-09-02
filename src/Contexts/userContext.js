import  {createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [contextState, setContextState] = useState([])

    const initialUser = ()=>{
        setContextState([
            {name: "Darling", lastName: "Vanderhorst", id:1, latitude:18.5218466, longitude:-69.7819067 }
        ])
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