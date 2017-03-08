import { combineReducers } from 'redux'

import jokes from '../../features/jokes'

const rootReducer = combineReducers({
  [jokes.constants.NAMESPACE]: jokes.reducer
})

export default rootReducer
