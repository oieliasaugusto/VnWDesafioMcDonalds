import React from "react";
import Header from "./Components/header/header"
import Main from "./Components/main/main"
import Promos from "./Components/main/promos"
import Footer from "./Components/footer/footer"
// import Evento from "./Components/main/evento"

// Importa font-family (GPT)
function importFont() {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');`));
  document.head.appendChild(style);
}

// Styled Component — Estilização global
import {createGlobalStyle} from "styled-components"
const GlobalStyle=createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:borderbox;
  font-family: Inter;
}
`
function App (){
  return(
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    <Promos/>
    <Footer/>
    </>
  )
}

export default App