import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  font-size: 20px;
  margin-top: -25px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin-top: 0.25rem;
  }
`
const Logo = ({ siteTitle, textColor }) => (
  <LogoWrap as={Link} to="/">
    <h1 style={{ color: textColor }}>{siteTitle}</h1>
  </LogoWrap>
)

export default Logo
