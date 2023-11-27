
import styled from "styled-components";

const ContactConteiner = styled.div`
     
     @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200&display=swap');

    background-color: white;
    height: 98vh;
    width: 98vw;

    margin: 0;
    padding: 0;

    .box {
        /* border: 1px solid tomato; */
        display: flex;
        flex-direction: row;

        justify-content: center;
        margin-left: -1em;
    }

   .box-1, .box-2 {
        /* border: 1px solid black; */

        margin: 10em;
        width: 25vw;
        height: 50vh;
   }

   .titulo, .titulo-2 {
        
        font-size:5em;
        text-decoration: #FF6B00 underline;
        text-align: center;
        color: #070E4E;
        font-family: 'Bai Jamjuree', sans-serif; 
        font-weight: lighter;
        
   }

     .linkedin {
          display: flex;
          flex-direction: row;
          align-content: center;
          justify-content: center;
          font-family: 'Bai Jamjuree', sans-serif; 
          font-weight: lighter;
     }

     a {
          text-decoration: none;
          color: #070E4E;

     }
img {
     width: 2vw;
     height: 2vw;
     margin: 5px;
}

a:hover {
     color: #FF6B00;
     font-weight: bold;
}
   .descricao {
        margin-top: 3em;
        width: 22vw;
        height: 10vh;

        font-size: 1.5em;
        text-align: justify;
        margin-left: 1em;
        font-family: 'Bai Jamjuree', sans-serif; 
        font-weight: lighter;
   }

   
   .box-2 {
        /* border: 1px solid green; */
   }

   form {
        display: flex;
        flex-direction: column;

        margin-top: 3em;        
   }

   .nome, .email, button {
        background-color: #FF994F;
        margin: 0.2em;
        border: 1px solid white;
        border-radius: 5px;
        height: 3vh;
        padding-left: 0.5em;

        font-size: 1.2em;

        
        box-shadow:
          1px 1px #070E4E,
          2px 2px #070E4E,
          3px 3px #070E4E;
        -webkit-transform: translateX(-2px);
        transform: translateX(-2px);

        
   }

   .texto {
        background-color: #FF994F;
        margin: 0.2em;
        border: 1px solid white;
        border-radius: 5px;
        font-family: 'Bai Jamjuree', sans-serif; 
        font-weight: lighter;
      font-size: 1.2em;
      padding-left: 0.5em;
      padding-top: 0.5em;
   }

   textarea {
        resize: none;
        width: 24vw;
        height: 21vh;
        box-shadow:
                1px 1px #070E4E,
                2px 2px #070E4E,
                3px 3px #070E4E;
        -webkit-transform: translateX(-2px);
        transform: translateX(-2px);

        
   }

   ::placeholder {
        color: black;
        font-size: 1em;
        opacity: 40%;
   }

   button {
     height: 4vh;
     width: 24.8vw;

     cursor: pointer;
   }

   /* button:hover {
     box-shadow:
                1px 1px #53a7ea,
                2px 2px #53a7ea,
                3px 3px #53a7ea;
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);

   } */

     


`
export {ContactConteiner}
