
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

<<<<<<< HEAD
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
=======
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
>>>>>>> d7f5e39ba45a35cd4ce39595714360e8517bb7cc
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

<<<<<<< HEAD
/* Dropdown Button */
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {

  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}
=======
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


>>>>>>> d7f5e39ba45a35cd4ce39595714360e8517bb7cc
`
export {ConteinerService}