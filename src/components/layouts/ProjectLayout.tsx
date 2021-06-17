import React from "react"

import "./layout.css"

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <>
      <div className="projectLayout">
        <div className="projectInner">{children}</div>
      </div>
    </>
  )
}

interface ProjectLayoutProps {
  children: any
}

export default ProjectLayout
