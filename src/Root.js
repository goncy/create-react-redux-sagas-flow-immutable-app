import React, { Component } from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router} from 'react-router-dom'

import common from './features/common'
import router from './features/router'

class Root extends Component {
  componentDidMount () {
    const {appInitialized} = this.props
    appInitialized()
  }

  render () {
    return (
      <Router>
        <common.Layout>
          <router.Routes/>
        </common.Layout>
      </Router>
    )
  }
}

const mapDispatchToProps = {
  appInitialized: common.actions.appInitialized.run
}

export default connect(undefined, mapDispatchToProps)(Root)
