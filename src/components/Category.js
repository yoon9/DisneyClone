import React from "react"
import styled from "styled-components"

import disneyViewer from "../assets/images/viewers-disney.png"
import disneyVideo from "../assets/videos/disney.mp4"
import marvelViewer from "../assets/images/viewers-marvel.png"
import marvelVideo from "../assets/videos/marvel.mp4"
import nationalViewer from "../assets/images/viewers-national.png"
import nationalVideo from "../assets/videos/national-geographic.mp4"
import pixarViewer from "../assets/images/viewers-pixar.png"
import pixarVideo from "../assets/videos/pixar.mp4"
import starWarsViewer from "../assets/images/viewers-starwars.png"
import starWarsVideo from "../assets/videos/star-wars.mp4"
function Category() {
  return (
    <Container>
      <Wrap>
        <img src={disneyViewer} alt="Disney" />
        <video autoPlay loop muted>
          <source src={disneyVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={marvelViewer} alt="Marvel" />
        <video autoPlay loop muted>
          <source src={marvelVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={nationalViewer} alt="National-Geographic" />
        <video autoPlay loop muted>
          <source src={nationalVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={pixarViewer} alt="Pixar" />
        <video autoPlay loop muted>
          <source src={pixarVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={starWarsViewer} alt="Star-Wars" />
        <video autoPlay loop muted>
          <source src={starWarsVideo} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  )
}

export default Category

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
    border-radius: 5px;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`
