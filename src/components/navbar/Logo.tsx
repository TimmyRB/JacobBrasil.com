import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  font-size: 20px;
  margin-top: -0.85rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin-top: 0.25rem;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`
const Logo = ({ siteTitle, textColor }: LogoProps) => (
  <LogoWrap as={Link} to="/">
    <h1 style={{ color: textColor }}>{siteTitle}</h1>
  </LogoWrap>
)

interface LogoProps {
  siteTitle: string
  textColor: string
}

export default Logo
