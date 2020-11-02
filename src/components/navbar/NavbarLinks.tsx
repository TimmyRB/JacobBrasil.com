import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`  
  font-size: 1.0625rem;
  font-weight: 500;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  margin-left: 2.5rem;
  text-transform: uppercase;

  :hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    color: #111 !important;
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = ({ menuLinks, textColor }) => {
  return (
    <>
      {menuLinks.map((link: { name: string; slug: string }) => (
        <NavItem key={link.name + "-" + link.slug} style={{ color: textColor }} to={link.slug}>{link.name}</NavItem>
      ))}
    </>
  )
}

export default NavbarLinks
