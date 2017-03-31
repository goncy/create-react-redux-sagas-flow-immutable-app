import React from 'react'
import {HashRouter as Router} from 'react-router-dom'

import enhacer from './enhacer'

import Layout from '../Layout'
import router from '../../../router'

const Root = () => (
  <Router>
    <Layout>
      <router.Routes/>
    </Layout>
  </Router>
)

export default enhacer(Root)
