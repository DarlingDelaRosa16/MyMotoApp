import {React} from 'react'
import { MotoButtonClose, MotoContentInfo, MotoIdContent, MotoIdentificationImg, MotoServiceTime, MotoUserName, MotoUserTrips } from '../styled'

const MyMotoID = (props) => {

    const showOff = ()=>{
        props.showOff.setMotoModal([false,false,false])
    }

    return (
        <>
            <MotoUserName colorName="white" displayName="inline-block">Darling Nomar De la rosa Vanderhorst</MotoUserName>
            <MotoIdContent>
                <MotoIdentificationImg src="https://via.placeholder.com/180x130"></MotoIdentificationImg>
                <MotoContentInfo>
                    <MotoServiceTime colorName="white">Tiempo aproximado de 10min</MotoServiceTime>
                    <MotoUserTrips colorName="white" >2042 - viajes</MotoUserTrips>
                    <MotoButtonClose onClick={showOff}>Cerrar</MotoButtonClose>
                </MotoContentInfo>
            </MotoIdContent>
            
        </>
    );
}

export default MyMotoID;