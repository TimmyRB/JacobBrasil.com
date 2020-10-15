import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import HeroImage from "./HeroImage"

const HeroHolder = styled.div`
  color: #f7f7ff;
  font-family: "Quicksand", sans-serif;
  margin-top: 15%;
  display: flex;
  justify-content: space-between;
`

const HeroContent = styled.div``

const HeroTitle = styled.span`
  color: #4949E5;
  font-weight: 700;
  font-size: 3.125rem;
  max-width: 28.25rem;
  word-wrap: break;
  text-transform: uppercase;
  line-height: 0.95;
  cursor: default;

  @media (max-width: 768px) {
    font-size: 2.85rem;
  }
`

const HeroChangeable = styled.span`
  overflow: hidden;
  background: linear-gradient(90deg, #FFFFFF, #FFFFFF 50%, #4949E5 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 0 100%; 
  transition: background-position .5s ease;

  :hover {
    background-position: 100% 0;
  }
`

const HeroSubtitle = styled.span`
  padding-top: 0.9375rem;
  font-weight: 500;
  font-size: 1.0625rem;
  display: block;
  max-width: 22.5rem;
  word-wrap: break;
  opacity: 0.75;
`

const HeroButton = styled.button`
  display: block;
  margin-top: 2.5rem;
  padding: 1.4375rem 4.0625rem;
  color: #5d5df9;
  background-color: #fff;
  font-family: "Quicksand", sans-serif;
  font-size: 1.3125rem;
  font-weight: 400;
  border: none;
  transition: all 0.3s ease 0s;
  border-radius: 0.5rem;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: #f7f7ff;
    border-radius: 0rem;
  }
`

const Hero = () => (
  <HeroHolder>
    <HeroContent>
      <HeroTitle>
        I build
        <br />
        <HeroChangeable>full stack</HeroChangeable>
        <br />
        applications.
      </HeroTitle>
      <HeroSubtitle>
        A self-taught developer experienced in creating responsive applications built for mobile, desktop & web.
      </HeroSubtitle>
      <HeroButton>Call to Action</HeroButton>
    </HeroContent>
    <HeroImage />
  </HeroHolder>
)

export default Hero
