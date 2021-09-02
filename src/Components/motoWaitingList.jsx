import React, {useContext}from 'react'
import {MotoButtonClose, TitleboxId, UserCoordinates, UserName } from '../styled'
import UserContext from '../Contexts/userContext'

const MotoWaitingList = (props) => {
    
    const {contextState, /*initialUser*/} = useContext(UserContext);

    const showOff = ()=>{
        props.showOff.setMotoModal(false)
    }

    const newLocation = ()=>{
        const geolocation = navigator.geolocation;
        const posicion = (pos)=>{}
        geolocation.getCurrentPosition(posicion)

        props.showOff.setMotoModal([false, false, false, true])
    }
    
    return (
        <>
            <TitleboxId>Orden de servicio</TitleboxId>
            {
                contextState.map(item => (

                    <div  key={item.id} style={{ marginBottom: "2px", border: "2px solid white", borderRadius:"5px"}}>
                        <UserName colorName="white">{item.name} {item.lastName}</UserName>
                        <UserCoordinates as="a" mouseCursor="pointer" onClick={newLocation} colorName="white" ></UserCoordinates>
                    </div>
                ))
            }
            
            
            <MotoButtonClose onClick={showOff}>Cerrar</MotoButtonClose>
        </>
    );
}
export default MotoWaitingList;