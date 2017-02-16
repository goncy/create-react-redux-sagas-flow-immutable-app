import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import jokes from './jokes'

const rootReducer = combineReducers({
  jokes,
  // Router
  routing: routerReducer
})

export default rootReducer
