import React, { Component } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import jokes from './features/jokes'
import common from './features/common'

import Layout from './features/common/components/Layout'
import Routes from './Routes'

class Root extends Component {
  componentDidMount () {
    const {appInitialized, fetchJoke} = this.props
    // Dispatch initialized action
    appInitialized()
    // Fetch 10 jokes
    for (let i = 0; i < 10; i++) {
      fetchJoke()
    }
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
  fetchJoke: jokes.actions.fetchJoke.run,
  appInitialized: common.actions.appInitialized.run
}

export default connect(undefined, mapDispatchToProps)(Root)
