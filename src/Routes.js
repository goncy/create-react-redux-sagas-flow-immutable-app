import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import jokes from './features/jokes'

const Routes = () => (
  <Router>
    <Route exact path="/" component={jokes.scenes.List} />
  </Router>
)

export default Routes
