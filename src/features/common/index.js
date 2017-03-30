// Actions
import * as actions from './actions'
// Constants
import * as constants from './constants'
// Layout
import Layout from './components/Layout'
// hocs
import asyncFromAction from './hocs/asyncFromAction'

export default {
  Layout,
  actions,
  constants,
  hocs: {
    asyncFromAction
  }
}
