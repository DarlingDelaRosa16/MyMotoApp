import React from 'react'
import {MotoButtonClose, TitleboxId, UserCoordinates, UserName } from '../styled'

const MotoWaitingList = (props) => {

    const showOff = ()=>{
        props.showOff.setMotoModal(false)
    }

    const newLocation = ()=>{
        const geolocation = navigator.geolocation;
        const posicion = (pos)=>console.log(pos)
        geolocation.getCurrentPosition(posicion)
    }
    
    return (
        <>
            <TitleboxId>Orden de servicio</TitleboxId>
            <div>
                <UserName colorName="white">Joan Pedernales Ulises</UserName>
                <UserCoordinates as="a" mouseCursor="pointer" onClick={newLocation} colorName="white" >Coordenadas 18.528126, -69.780422</UserCoordinates>
            </div>
            
            <MotoButtonClose onClick={showOff}>Cerrar</MotoButtonClose>
        </>
    );
}
export default MotoWaitingList;