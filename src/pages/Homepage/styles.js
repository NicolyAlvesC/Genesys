import styled from "styled-components";

const Container = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300&display=swap');

    display: flex;
    flex-direction: column;
    background-color: white;
    height: 98vh;
    width: 98vw;

    .box {
        position: absolute;
                top: 50%;
                left: 50%;
                width: 670px;
                height: auto;
                margin-left: -335px;
                margin-top: -97px;
    }

    .titulo {
       font-family: 'Bai Jamjuree', sans-serif; 
        text-align: center;
        color: #070E4E;
        font-size: 5em;
        text-decoration: #FF6B00 underline;
    }

    .subtitulo {
        font-family: 'Bai Jamjuree', sans-serif;
        text-align: center;
        color: #070E4E;
        font-size: 1.7em;
    }
`
export {Container}