import React from "react"
import styled from "styled-components"

import "./layout.css"

const Layout = styled.div<{ isPurple: boolean}>`
  background-color: ${props => props.isPurple ? "#5d5df9" : "#f7f7ff"};
`

const LayoutInner = styled.div`
  max-width: 85.3125rem;
  margin: 0 auto;
  padding: 0 10%;
`

const DefaultLayout = ({ children, isPurple = false }) => {
  return (
    <>
      <Layout isPurple={isPurple}>
        <LayoutInner>{children}</LayoutInner>
      </Layout>
    </>
  )
}

export default DefaultLayout
