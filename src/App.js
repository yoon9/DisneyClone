import styled from "styled-components"

import Nav from "./components/Nav"

import "./App.css"
import homeBackground from "../src/assets/images/home-background.png"

function App() {
  return (
    <Container>
      <Nav />
    </Container>
  )
}

export default App

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${homeBackground}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`
