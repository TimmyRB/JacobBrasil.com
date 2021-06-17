import React from "react"
import styled from "styled-components"

import "./layout.css"

const Layout = styled.div`
  background-color: #f7f7ff;
`

const LayoutInner = styled.div`
  max-width: 85vw;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 10%;
`

const ShowcaseLayout = ({ children }: ShowcaseLayoutProps) => {
  return (
    <>
      <Layout>
        <LayoutInner>{children}</LayoutInner>
      </Layout>
    </>
  )
}

interface ShowcaseLayoutProps {
  children: any
}

export default ShowcaseLayout
