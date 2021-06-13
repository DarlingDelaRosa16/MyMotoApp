import styled from 'styled-components'

/*//////////////////////////////////////////////////////*/
/*//////////////////////DIVS////////////////////////////*/
export const MyMotoApp = styled.div`
    width: 100%;
    height: 35px;
    text-align: center;
    background-color: black;
    border-bottom: 5px solid greenyellow;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-bottom: 5px;
`;

export const MotoBox = styled.div`
    background: linear-gradient(#ffffff, #ceccc8);
    box-shadow: 0 10px 6px -6px #777;
    margin: auto;
    border-radius: 2px;
    width: 96%;
    min-height: 100px;
`; 

export const MotoBoxContent = styled.section`
    width: 96%;
    min-height: 250px;
    background-color: #ddd;
    border-radius: 2px;
    margin: auto;
    margin-top: 10px;
`;

export const MotoBoxIdentification = styled.div`
    visibility: ${(props)=> props.show ? "visible": "hidden" };
    z-index: 2;
    position: fixed;
    display: inline-block;
    border-radius: 2px;
    background: linear-gradient(#555555, #111111);
    width: 370px;
    height: 185px;
`;

export const MotoIdContent = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
`;
export const MotoContentInfo = styled.div`
    grid-column: 2/3;
    padding: 5px;
`;

/*//////////////////////////////////////////////////////*/
/*////////////////////////Buttons///////////////////////*/

export const MotoButtonCall = styled.button`
    min-width: 90px;
    background: ${(props)=> props.waitingRoomStyle ? "linear-gradient(#ffffff, red)" : "linear-gradient(#ffffff, greenyellow)" } ;
    margin: 2px;    
    padding: 5px;
    border-radius: 10px;
    &:hover{
        background: ${(props)=> props.waitingRoomStyle ? "linear-gradient(red, #ffffff)" : "linear-gradient(greenyellow, #ffffff)" } ;
    }
`;
export const MotoButtonClose = styled(MotoButtonCall)`
    display: ${(props)=> props.displayButton};
    background: linear-gradient(#ffffff, red) ;
    &:hover{
        background: linear-gradient(red, #ffffff);
    }
`;

export const LoginButton = styled(MotoButtonCall)`
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    background: linear-gradient(#ffffff, gray) ;
    width: 45px;
    grid-column: 1/2;
    &:hover{
        background: linear-gradient(gray, #ffffff);
    }
`;

export const ConfirmButton = styled(MotoButtonCall)`
    
`;

/*//////////////////////////////////////////////////////*/
/*////////////////////////HS///////////////////////*/

export const AplicationName = styled.h1`
    margin:0;
    grid-column: 2/3;
    color: white;
    font-size: 25px;
`;

export const MotoUserName = styled.h4`
    cursor: ${(props)=>props.mouseCursor};
    font-size: 18px;
    text-decoration: none;
    margin: 0;
    padding: 5px;
    color:  ${(props)=> props.colorName};
    display : ${(props)=> props.displayName};
`;

export const TitleBoxContent = styled.h1`
    color: #222;
    padding: 7px;
    margin-bottom: 0;
`;

export const MotoUserState = styled.h5`
    margin: 0;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 14px;
`;

export const MotoServiceTime = styled.h6`
    margin: 0;
    grid-column: 2/3;
    color:  ${(props)=> props.colorName};
    display: inline-block;
    padding-left: 5px;
    font-size: 16px;
    margin-right: 10px;
`;

export const UserName = styled(MotoUserName)`
    font-size: 18px;
    color:white;
`;

export const MotoUserTrips = styled.h4`
    color: ${(props)=> props.colorName};
    padding-left: 5px;
    margin-bottom: 9px;
`;

/*//////////////////////////////////////////////////////*/
/*////////////////////////IMG///////////////////////*/

export const MotoIdentificationImg = styled.img`
    display: inline;
    src: ${(props)=> props.src};
    grid-column: 1/2;
    width: 180px;
    height: 130px;
    margin-left: 5px;
    margin-top: 5px;
    border-radius: 5px;
    background-color: violet;
`;

/*//////////////////////////////////////////////////////*/
/*////////////////////////INPUTS///////////////////////*/

export const Inputs = styled.input`
    width: 90%;
    height: 40px;
    border-radius: 10px;
    padding-left: 15px;
`;