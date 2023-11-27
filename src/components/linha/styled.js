import styled from "styled-components";

const ConteinerLinha = styled.div`

  height: 82vh;
  border-left: 3px solid #FF6B00;
  margin: 3em 5em;

  @media (max-width: 1024px) {
   
    margin: 0;
    padding: 0;
    
    height:100px;
    border: 1px solid saddlebrown;

    transform: rotate(90deg);
}



`
export {ConteinerLinha}