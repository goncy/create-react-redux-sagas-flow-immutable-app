import React, { Component } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import {appInitialized} from './features/common/actions'

import Layout from './features/common/components/Layout'
import Routes from './Routes'

class Root extends Component {
  componentDidMount () {
    const {appInitialized} = this.props
    appInitialized()
  }

  render () {
    return (
      <Router>
        <Layout>
          <Routes/>
        </Layout>
      </Router>
    )
  }
}

const mapDispatchToProps = {
  appInitialized: appInitialized.run
}

export default connect(undefined, mapDispatchToProps)(Root)
