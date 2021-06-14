import {React, useState, useContext} from 'react'
import UserContext from '../Contexts/userContext'
import {AplicationName, LoginButton, MotoBox, MotoBoxContent, MotoBoxIdentification,
        MotoButtonCall, MotoServiceTime, MotoUserName, MotoUserState, MyMotoApp,
        TitleBoxContent, UserName} from '../styled'
import LogIn from './logIn'
import MapBoxGl from './mapBoxGL'
import MotoWaitingList from './motoWaitingList'
import MyMotoID from './myMotoID'


const MyMoto = () => {
    
    const {contextState} = useContext(UserContext);

    const [state, setState] = useState([false, "Libre"])
    const [stateRequest, setStateRequest] = useState("Solicitar")
    const [motoModal, setMotoModal] = useState([false, false, false, false])

    const motoRequest = ()=>{
        if(state[0] === false){
            setState([true, "Ocupado"])
            setStateRequest("Lista de espera")
        }
        if(state[0] === true){
            setMotoModal([false, false, true, false])
        }
    }
    const infoMotoUser = () =>{
        setMotoModal([false, true, false, false])
    }
    const loginIn = () =>{
        setMotoModal([true, false, false, false])
    }
    const mapBox =() =>{
        setMotoModal([false, false, false, true])
    }

    return (
        <>
        <MyMotoApp >
            <LoginButton onClick={loginIn}>Log In</LoginButton>
            <MotoBoxIdentification show={motoModal[0]}><LogIn showOff={{motoModal, setMotoModal}}/></MotoBoxIdentification>
            <AplicationName>My Motorista</AplicationName>
            <UserName>{contextState.nombre}</UserName>
        </MyMotoApp>

        <MotoBoxIdentification show={motoModal[3]}><MapBoxGl showOff={{motoModal, setMotoModal}}/></MotoBoxIdentification> 
        
        <MotoBoxContent>
            <TitleBoxContent mouseCursor="pointer" onClick={mapBox}>Parada SI-K17-BN</TitleBoxContent>
               
            <MotoBox>

                <MotoUserName mouseCursor="pointer" colorName="black" as="a" onClick={infoMotoUser} >Darling Nomar De la Rosa</MotoUserName>
                <MotoBoxIdentification show={motoModal[1]}><MyMotoID showOff={{motoModal, setMotoModal}} /></MotoBoxIdentification>
                <MotoUserState>{state[1]}</MotoUserState>
                <MotoServiceTime>Recogida en 10 minutos </MotoServiceTime>
                <MotoBoxIdentification show={motoModal[2]}><MotoWaitingList showOff={{motoModal, setMotoModal}}/></MotoBoxIdentification>
                <MotoButtonCall waitingRoomStyle={state[0]} onClick={motoRequest}>{stateRequest}</MotoButtonCall>
                
            </MotoBox>      
        </MotoBoxContent>  
        
             
        </>
    );
}
 
export default MyMoto;