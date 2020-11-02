import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"
import Logo from "./Logo"

const Navigation = styled.nav`
  position: relative;
  text-transform: uppercase;
  z-index: 2;
  align-self: center;
  border: none;
  height: 2.5rem;
  padding-top: 3.125rem;
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

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: left;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 1rem;
    background-color: #f7f7ff;
    transition: all 0.3s ease-in;
    top: 4.5rem;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #f7f7ff;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  justify-self: flex-end;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #f7f7ff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
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

const HamburgerDark = styled.div`
  background-color: #0f0f11;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  justify-self: flex-end;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #0f0f11;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
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

const Navbar = ({ siteTitle, menuLinks, useDark = false }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Logo siteTitle={siteTitle} textColor={useDark ? "#0F0F11" : "#f7f7ff"} />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (
          useDark ? (
            <HamburgerDark open />
          ) : (
            <Hamburger open />
          )
        ) : useDark ? (
          <HamburgerDark />
        ) : (
          <Hamburger />
        )}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks
            menuLinks={menuLinks}
            textColor={useDark ? "#0F0F11" : "#f7f7ff"}
          />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks
            menuLinks={menuLinks}
            textColor={useDark ? "#0F0F11" : "#f7f7ff"}
          />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
