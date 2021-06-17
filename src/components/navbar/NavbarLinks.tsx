import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled.a`
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  margin-left: 2.5rem;
  text-transform: uppercase;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  :hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = ({ menuLinks, textColor }: NavbarLinksProps) => {
  return (
    <>
      {menuLinks.map((link: { name: string; slug: string }) => (
        <NavItem
          key={link.name + "-" + link.slug}
          style={{ color: textColor }}
          href={link.slug}
        >
          {link.name}
        </NavItem>
      ))}
      <NavItem
        key="Contact"
        style={{ color: textColor }}
        href="mailto:contact@jacobbrasil.com"
      >
        Contact
      </NavItem>
    </>
  )
}

interface NavbarLinksProps {
  menuLinks: { name: string; slug: string }[]
  textColor: string
}

export default NavbarLinks
