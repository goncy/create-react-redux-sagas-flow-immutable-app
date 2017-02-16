import React, { Component } from 'react'

import Routes from './Routes'

export default class Root extends Component {
  render () {
    // This component it's simple but left like this to inject any necessary data at application level
    return (
      <Routes history={this.props.history} />
    )
  }
}
