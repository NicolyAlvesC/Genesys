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
        color: #070E4E;
        font-family: 'Bai Jamjuree', sans-serif; 
        font-size: 5em;
        text-align: center;
        text-decoration: #FF6B00 underline;

        
}



    p:\nth-child(2) { 
        animation: type2 20s steps(60, end);
    }

    
    span{
    animation: blink 1s infinite;
    }

    @keyframes type{ 
    from { width: 0; } 
    } 

    @keyframes type2{
    0%{width: 0;}
    50%{width: 30;}
    100%{ width: 100; } 
    } 

    @keyframes blink{
    to{opacity: .0;}
    }


    .subtitulo {
        font-family: 'Bai Jamjuree', sans-serif;
        
        color: #070E4E;
        font-size: 1.7em;

        white-space: nowrap; 
        overflow: hidden; 
        width: 20vw;
        margin-left: 6.5em;
        margin-top: -1em;
        animation: type 3s steps(60, end);
    }


    ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
    background: #dad7d7;
}




@media (max-width: 1024px) {
    border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 98vh;
    width: 95vw;

.titulo {
    font-size: 3em;
    margin-top: 0.6em;
}

p:\nth-child(2) { 
        animation: type2 20s steps(60, end);
    }

    
    span{
    animation: blink 1s infinite;
    }

    @keyframes type{ 
    from { width: 0; } 
    } 

    @keyframes type2{
    0%{width: 0;}
    50%{width: 30;}
    100%{ width: 100; } 
    } 

    @keyframes blink{
    to{opacity: .0;}
    }


    .subtitulo {
        font-family: 'Bai Jamjuree', sans-serif;

        /* border: 1px solid red; */
        
        color: #070E4E;
        font-size: 1em;

        white-space: nowrap; 
        overflow: hidden; 
        width: 50vw;
        margin-left: 15.3em;
        margin-top: -1em;
        animation: type 3s steps(60, end);
    }

}



`
export {Container}