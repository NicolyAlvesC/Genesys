
import styled from "styled-components";

const ContactConteiner = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300&display=swap');

    display: flex;
    flex-direction: column;
    background-color: white;
    height: 98vh;
    width: 98vw;

    font-family: 'Bai Jamjuree', sans-serif; 

    .form {
        width: 100%;
        max-width: 30rem;
    }

    label, input, textarea, button {
        display: block;
    }

    input, textarea, button {
        width: 100%;
        font: inherit;
        padding:1.25rem;
        font-weight: 700;
    }

    input, textarea {
        margin-bottom: 1rem;
        color: white;
        background: #323644;
        border: 0.125rem solid transparent;
        border-radius: 1.125rem;
        transition: border-color 0.3s, box-shadow 0.3s;
    }

  input:hover, input:focus, textarea:hover, textarea:focus {
        outline: none;
        border-color:cyan;
        box-shadow: 0 0 0 0.3125rem #26344a;

  }

  label {
    margin-bottom: 0.5rem;
    color: #84868f;
  }

    textarea {
        min-height: 12.5rem;
        resize: vertical;
    }

    button {
        border: none;
        border-radius: 99px;
        color:white;
        background: #1d90f5;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover, button:focus {
        outline: none;
        background-color: #1c70d3;
    }

    button:disabled {
        cursor: not-allowed;
        background-color: #555b69;

    }

    .success,
    .error {
        text-align: center;
    }

    .success {
        color: greenyellow;
    }

    .error {
        color: tomato;
    }
`
export {ContactConteiner}
