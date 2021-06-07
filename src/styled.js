import styled from 'styled-components'

export const MyMotoApp = styled.div`
    width: 100%;
    height: 35px;
    background-color: black;
    border-bottom: 2px solid greenyellow;
    color: white;
    font-size: 25px;
    text-align: center;
    padding-bottom: 5px;
    
`;
export const MotoBoxContent = styled.section`
    width: 96%;
    min-height: 250px;
    background-color: #ddd;
    border-radius: 2px;
    margin: auto;
    margin-top: 10px;
`;

export const MotoBox = styled.div`
    background: linear-gradient(#ffffff, #ceccc8);
    box-shadow: 0 10px 6px -6px #777;
    margin: auto;
    border-radius: 2px;
    width: 96%;
    min-height: 100px;
`;      

export const MotoUserName = styled.h4`
    font-size: 21px;
    display: inline-block;
    margin: 0;
    padding: 5px;
`;

export const MotoButtonCall = styled.button`
    width: 90px;
    background: linear-gradient(#ffffff, greenyellow);
    margin: 0;
    padding: 5px;
    border-radius: 10px;
    margin-top: 2px;
    margin-bottom: 2px;

    &:hover{
        background:linear-gradient(greenyellow, #ffffff);
    }
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
    font-size: 16px;
`;

export const MotoServiceTime = styled.h6`
    margin: 0;
    display: inline-block;
    padding-left: 5px;
    font-size: 16px;
    margin-right: 10px;
`;