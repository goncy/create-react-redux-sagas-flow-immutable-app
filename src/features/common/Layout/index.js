import React from 'react'

import './Layout.css'

const Layout = ({children}) => (
  <div className="Layout">
    <div className="Layout-header">
      <h2>Chuck jokes</h2>
    </div>
    <div className="Layout-intro">
      {children}
    </div>
  </div>
)

export default Layout
