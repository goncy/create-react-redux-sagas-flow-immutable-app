import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App'

const Routes = ({history}) => (
  <Router history={history}>
    <Route path="/">
      <IndexRoute component={App} />
    </Route>
  </Router>
)

export default Routes
