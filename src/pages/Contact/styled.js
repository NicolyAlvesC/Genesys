
import styled from "styled-components";

const ContactConteiner = styled.div`
     
     @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200&display=swap');

    background-color: white;
    height: 98vh;
    width: 98vw;

     box-sizing: border-box;

  .awa {
     display: none;
  }

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
     color: blueviolet;
     font-weight: bold;
}
   .descricao {
        margin-top: 3em;
        width: 22vw;
        height: 40vh;

        font-size: 1.5em;
        text-align: justify;
        margin-left: 1em;
        font-family: 'Bai Jamjuree', sans-serif; 
        font-weight: lighter;

        text-indent: 1em !important;
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

 

     
   @media (max-width: 1024px) {
     border: 1px solid yellow;
     display: flex;
     flex-direction: column !important;
     background-color: white;
     height: 98vh;
     width: 95vw;

     .box {
          display:flex ;
          flex-direction: column;

          border: 1px solid rebeccapurple;
     }

     .box-1 {
          border: 1px solid skyblue;
          width: 95vw;
          height: 50vh;
     }

     .titulo {
          border: 1px solid sandybrown;
     }
     

     .descricao {
          border: 1px solid olivedrab;
     }

     .awa {
          display: none;
     }
   

    .box-2 {
          border: 1px solid darkgoldenrod;
          display: none;
    }

    .titulo-2 {
       border: 1px solid orchid;
    }

    /* .nome, .email, button {
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
        width: 59vw;
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
        font-size: 0.8em;
        opacity: 40%;
   }

   button {
     height: 4vh;
     width: 63vw;

     cursor: pointer;
   }

   form {
     border: 1px solid red;
        display: flex;
        flex-direction: column;
        width: 65vw;
        margin-top: em;  
        margin-left: -5.5em;
   }

   .linkedin {
     border: 1px solid red;
     height: 5vh;
     font-size: 0.8em;
     align-items: center;
     margin-top: -3em;
     background-color: #FF6B00;
     width: 95vw;

   }
   

   img {
     width: 5vw;
     height: 5vw;
     margin: 5px;
}
     a {
          color: white;
     }
     a:hover {
          color: white;
          font-weight: bold;
     } */

     .linkedin {
          display: none;
     }   .linha {
          display: none;
     }


}
`
export {ContactConteiner}
