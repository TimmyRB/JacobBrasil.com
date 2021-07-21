import React from "react"
import styled from "styled-components"

const Layout = styled.body`
  background-color: #f7f7ff;
`
const LayoutInner = styled.div`
  margin: 0 auto;
  padding: 0 10%;
`

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <>
      <Layout>
        <LayoutInner>{children}</LayoutInner>
      </Layout>
    </>
  )
}

interface ProjectLayoutProps {
  children: any
}

export default ProjectLayout
