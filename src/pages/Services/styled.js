
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
  border: 1px solid black;
}
.fotos {
  display: flex;
  flex-direction: column;

  background-color: black;
  border:3px solid #FF6B00;;

  width: 35vw;
  height: 62vh;
  margin: 2.5em 2.5em 0em 2.5em !important;
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
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

`
export {ConteinerService}