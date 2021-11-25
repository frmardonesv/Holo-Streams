import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --primaryColor: #55E2FF;
    --purpleColor: #FF004D;
    --purpleColorText: #ff7ba3;
    --backgroundColor: #121212;
    --backgroundD7: #232323;
    --blackText: #10141A;

}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600&display=swap');
    body{
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        background-color: var(--backgroundColor);
    }
    .App{
        position: relative;
    }
    h1,h2,h3,h4,h5,p {
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
        color: black;
    }
    section{
        margin-top: 1.2em;
    }
    @keyframes skeleton {
    to {
      opacity: 0.6;
    }
  }

`;
