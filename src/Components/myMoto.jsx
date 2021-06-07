import React from 'react'
import {MotoBox, MotoBoxContent, MotoButtonCall, MotoServiceTime, MotoUserName, MotoUserState, MyMotoApp, TitleBoxContent} from '../styled'

const MyMoto = () => {
    return (
        <>
        <MyMotoApp>
            My Motorista
        </MyMotoApp>
        <MotoBoxContent>
            <TitleBoxContent>Parada SIK17BN</TitleBoxContent>
            <MotoBox>
                <MotoUserName>Darling Nomar De la Rosa</MotoUserName>
                <MotoUserState>libre</MotoUserState>
                <MotoServiceTime>Recogida en 10 minutos </MotoServiceTime>
                <MotoButtonCall className="btn">Llamar</MotoButtonCall>
            </MotoBox>      
        </MotoBoxContent>        
        </>
    );
}
 
export default MyMoto;