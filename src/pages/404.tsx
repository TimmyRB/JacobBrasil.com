import React from "react"
import styled from "styled-components"
import DefaultLayout from "../components/layouts/DefaultLayout"

import SEO from "../components/seo"

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92.8vh;
  overflow: hidden;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const Icon = styled.span`
  font-size: 6rem;
  margin: 0 0 25px;
`

const Text = styled.span`
  font-size: 2.5rem;
  margin: 0 0 25px;
`

const HeroButton = styled.button`
  display: block;
  padding: 1.25rem 3rem;
  color: #fff;
  background-color: #5d5df9;
  font-size: 2rem;
  font-weight: 400;
  border: none;
  transition: all 0.3s ease 0s;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="404 Page Not found" />
    <Holder>
      <Icon>✋</Icon>
      <Text>This is not the page your are looking for...</Text>
      <a href="/" style={{ textDecoration: "none" }}>
        <HeroButton>Return home</HeroButton>
      </a>
    </Holder>
  </DefaultLayout>
)

export default NotFoundPage
