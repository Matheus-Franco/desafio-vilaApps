import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F0;
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialised;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
