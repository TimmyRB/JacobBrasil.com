import React from "react"

import "./layout.css"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="defaultLayout">
        <div className="defaultInner">{children}</div>
      </div>
    </>
  )
}

export default DefaultLayout
