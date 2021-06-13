import React from 'react'
import { Inputs, MotoUserName, MotoButtonClose, ConfirmButton} from '../styled'

const LogIn = (props) => {

    const showOff = ()=>{
        props.showOff.setMotoModal([false,false,false])
    }

    return (
        <div>
            <MotoUserName colorName="white">Registrese</MotoUserName>
            <Inputs placeholder="Usuario"></Inputs>
            <Inputs placeholder="password"></Inputs>
            <ConfirmButton onClick={showOff}>confirmar</ConfirmButton>
            <MotoButtonClose onClick={showOff}>Cerrar</MotoButtonClose>
        </div>
    );
}
 
export default LogIn;