import React, { useState, useContext } from 'react'
import userContext from '../Contexts/userContext'
import {Form} from 'reactstrap'
import { Inputs, MotoUserName, MotoButtonClose, ConfirmButton} from '../styled'

const LogIn = (props) => {

    const {initialUser} = useContext(userContext);

    const [inputValue, setInputValue] = useState({
        user: '',
        password: ''
    })

    const showOff = (e)=>{
        props.showOff.setMotoModal([false,false,false])
        e.preventDefault()
    }

    const handleInputsChange = (e)=>{
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value
        })
    }

    const sendData = ()=>{
        initialUser()
        props.showOff.setMotoModal([false,false,false])
    }

    return (
        <div>
            <MotoUserName colorName="white">Registrese</MotoUserName>
            <Form autoComplete="off">
            <Inputs placeholder="Usuario" name="user" onChange={handleInputsChange}></Inputs>
            <Inputs placeholder="password" name="password" onChange={handleInputsChange}></Inputs>
            <ConfirmButton onClick={sendData} type="Reset">confirmar</ConfirmButton>
            <MotoButtonClose onClick={showOff}>Cerrar</MotoButtonClose>
            </Form>
            
        </div>
    );
}

export default LogIn;