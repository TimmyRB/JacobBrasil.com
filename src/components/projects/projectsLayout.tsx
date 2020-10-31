import React from "react"

import "./projectsLayout.css"

const ProjectsLayout = ({ children }) => {
  return (
    <>
      <div className="projects">{children}</div>
    </>
  )
}

export default ProjectsLayout
