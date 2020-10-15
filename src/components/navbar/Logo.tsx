import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  margin-top: -25px;
  font-weight: 700;
  color: #f7f7ff;
  text-decoration: none;
  text-transform: uppercase;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }

  @media (max-width: 768px) {
    margin-top: 0.25rem;
  }
`
const Logo = () => (
  <LogoWrap as={Link} to="/">
    <h1>Jacob Brasil</h1>
  </LogoWrap>
)

export default Logo
