
import styled from "styled-components";

const ConteinerService = styled.div`
  height: 98vh;
  width: 98vw;
  background-color: white;

 

.boxao {
  width: 97vw;
  height: 97vh;

  display:flex;
  flex-direction: row;

  justify-content: center;

  

  border: 3px solid yellow;
}

.box-2 {
  border: 1px solid red;
  width: 40vw;
  align-items: center;
}

.box-1 {
  border: 1px solid cyan;
  width: 40vw;
}


.linha {
  height: 82vh;
  border-left: 3px solid #FF6B00;
  margin: 3em 5em;
}

.titulo{
  font-family: 'Bai Jamjuree', sans-serif;
  text-align: center;
  color: #070E4E;
  font-size: 5em;
  text-decoration: #FF6B00 underline;
  margin-top: 1em;
}

img {
  border: 2px solid #FF6B;
}
.fotos {
  display: flex;
  flex-direction: column;

  border:3px solid orangered ;
  width: 35vw;
  height: 50vh;

  margin: 2.5em 2.5em 0em 2.5em !important;
}

.header-1, .header-2, .header-3 {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
}

.maior {
  width: 22.5vw;
  height: 20vh;
}

.maior-lado {
  width: 12vw;
  height: 20vh;
}

.maior-baixo-lado {
  width: 9.5vw;
  height: 23vh;
}

.maior-baixo {
  width: 25vw;
  height: 23vh;
}

.menor {
  width: 10vw;
  height: 20vh;
}

.menor-lado {
  width: 10vw;
  height: 10vh;

} 


`
export {ConteinerService}