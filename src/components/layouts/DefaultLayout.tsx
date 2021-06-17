import React from "react"
import styled from "styled-components"

import "./layout.css"

const Layout = styled.div<{ isPurple: boolean }>`
  background-color: ${props => (props.isPurple ? "#5C5EF3" : "#f7f7ff")};
  height: ${props => (props.isPurple ? "100vh" : "auto")};
`

const LayoutInner = styled.div`
  max-width: 85vw;
  max-height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 10%;
`

const DefaultLayout = ({ children, isPurple = false }: DefaultLayoutProps) => {
  return (
    <>
      <Layout isPurple={isPurple}>
        <LayoutInner>{children}</LayoutInner>
      </Layout>
    </>
  )
}

interface DefaultLayoutProps {
  children: any
  isPurple?: boolean
}

export default DefaultLayout
