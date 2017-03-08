import React, { Component } from 'react'
import {connect} from 'react-redux'

import jokes from './features/jokes'

import Layout from './features/common/Layout'
import Routes from './Routes'

class Root extends Component {
  componentDidMount () {
    for (let i = 0; i < 10; i++) {
      this.props.fetchJoke()
    }
  }

  render () {
    return (
      <Layout>
        <Routes/>
      </Layout>
    )
  }
}

const mapDispatchToProps = {
  fetchJoke: jokes.actions.fetchJoke.run
}

export default connect(undefined, mapDispatchToProps)(Root)
