import React from 'react'
import {MotoButtonClose, MotoContentInfo, MotoIdContentId, MotoIdentificationImg, MotoServiceTime, MotoUserName, MotoUserTrips } from '../styled'

const MotoWaitingList = (props) => {

    const showOff = ()=>{
        props.showOff.setMotoModal([false,false,false])
    }
    return (
        <>
            <MotoUserName>Orden de servicio</MotoUserName>
            <MotoServiceTime colorName="white">Joan Pedernales Ulises</MotoServiceTime>
            <MotoUserTrips colorName="white" >Coordenadas</MotoUserTrips>
            <MotoButtonClose onClick={showOff}>Cerrar</MotoButtonClose>
        </>
    );
}
export default MotoWaitingList;