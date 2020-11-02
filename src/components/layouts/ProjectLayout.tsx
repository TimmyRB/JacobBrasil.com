import React from "react"

import "./layout.css"

const ProjectLayout = ({ children }) => {
  return (
    <>
      <div className="projectLayout">
        <div className="projectInner">{children}</div>
      </div>
    </>
  )
}

export default ProjectLayout
