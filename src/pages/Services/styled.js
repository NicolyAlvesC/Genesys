
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
}

.box-2 {
 
  width: 40vw;
  align-items: center;
}

.box-1 {
  width: 40vw;
}



.titulo{
  font-family: 'Bai Jamjuree', sans-serif;
  text-align: center;
  color: #070E4E;
  font-size: 5em;
  text-decoration: #FF6B00 underline;
  margin-top: 1em;

  
}


.fotos {
  display: flex;
  flex-direction: column;

  background-color: black;
  border:3px solid #FF6B00;;

  width: 35vw;
  height: 62vh;
  margin: 2em 3em 0em 2.5em !important;
}

.header-1, .header-2 {
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

.header-3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.menor {
  width: 19vw;
  height: 18.5vh;
}

.menor-lado {
  width: 13vw;
  height: 18.5vh;
} 

.menor-lado-lado {
  width:24vw;
  height: 18.5vh;
}





.servicos {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  margin-top: 5em;
}

.manutencao, .orcamentos {
  /* border: 1px solid orange; */
  width: 22vw;
  height: 19vh;
  text-align: left;
  margin: 2em 0em 2em 10em;
}

.titulo-1, .titulo-2 {
  font-family: 'Bai Jamjuree', sans-serif;
  font-size: 3em;
  color: #070E4E;
}

.seta {
  margin-right: 0.2em;
}

.descricao-1, .descricao-2 {
  font-family: 'Bai Jamjuree', sans-serif;
  color: #070E4E;
  font-size: 1.4em;
  margin-top: 0.4em;
  text-align: justify;
  text-indent: 0.35em;
}








`
export {ConteinerService}