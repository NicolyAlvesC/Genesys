import styled from "styled-components";

const ConteinerService = styled.div`
  height: 98vh;
  width: 98vw;
  background-color: white;

.boxao {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 80em;
  left: 45%;
  width: 670px;
  height: auto;
  margin-left: -335px;
  margin-top: -97px;
}

.linha {
  height: 65vh;
  border-left: 3px solid #FF6B00;
  margin: 1em 10em;
}

.titulo{
  font-family: 'Bai Jamjuree', sans-serif;
  text-align: left;
  color: #070E4E;
  font-size: 5em;
  text-decoration: #FF6B00 underline;
}

.subtitulo {
  font-family: 'Bai Jamjuree', sans-serif;
  text-align: center;
  color: #070E4E;
  font-size: 5em;
  text-decoration: #FF6B00 underline;
}

.page {
  display: grid;
  padding-top: 5em;
  padding-left: 1em;
  font-family: Arial, sans-serif;
  grid-gap: 10px;
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';

}



.header {
  grid-area: header;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmvfXYIl1WTJvlP46JdTaOEwfgrH_MT_7wQ&usqp=CAU");
  height: 15vh;
  background-repeat: no-repeat;
  width: 16vw;
  background-size: 21.5em;
}
.menu { 
  grid-area: menu;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmvfXYIl1WTJvlP46JdTaOEwfgrH_MT_7wQ&usqp=CAU");
  height: 11vh;
  background-repeat: no-repeat;
  width: 8vw;
  background-size: 14em;
}
.main { 
  grid-area: main;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmvfXYIl1WTJvlP46JdTaOEwfgrH_MT_7wQ&usqp=CAU");
  height: 11vh;
  background-repeat: no-repeat;
  width: 7.5vw;
  background-size: 14em;
}

`
export {ConteinerService}