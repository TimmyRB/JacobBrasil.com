import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"
import Logo from "./Logo"

const Navigation = styled.nav`
  position: sticky;
  text-transform: uppercase;
  z-index: 2;
  align-self: center;
  border: none;
  height: 2.5rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 1rem;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div<{ navbarOpen: boolean }>`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div<{ isPurple: boolean; open: boolean }>`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: left;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    padding: 0.5rem 0;
    background-color: ${props => (props.isPurple ? "#5C5EF3" : "#f7f7ff")};
    box-shadow: 0 42px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    top: 4.5rem;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div<{ isDark: boolean; open: boolean }>`
  background-color: ${props => (props.isDark ? "#13162A" : "#f7f7ff")};
  width: 30px;
  height: 3px;
  transition: all 0.1s linear;
  align-self: center;
  justify-self: flex-end;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: ${props => (props.isDark ? "#13162A" : "#f7f7ff")};
    content: "";
    position: absolute;
    transition: all 0.1s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbar = ({ siteTitle, menuLinks, usePurple = false }: NavbarProps) => {
  const [navbarOpen, setNavbarOpen] = useState(true)

  return (
    <Navigation>
      <Logo
        siteTitle={siteTitle}
        textColor={usePurple ? "#f7f7ff" : "#13162A"}
      />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <Hamburger isDark={!usePurple} open={!navbarOpen} />
      </Toggle>
      <Navbox isPurple={usePurple} open={navbarOpen}>
        <NavbarLinks
          menuLinks={menuLinks}
          textColor={usePurple ? "#f7f7ff" : "#13162A"}
        />
      </Navbox>
    </Navigation>
  )
}

interface NavbarProps {
  siteTitle: string
  menuLinks: { name: string; slug: string }[]
  usePurple?: boolean
}

export default Navbar
