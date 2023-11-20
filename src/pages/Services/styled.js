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
`
export {ConteinerService}