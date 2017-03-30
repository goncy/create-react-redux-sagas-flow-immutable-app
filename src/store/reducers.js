import { combineReducers } from 'redux'
import {reducer as async} from 'async-action-creator'

import jokes from '../features/jokes'

const rootReducer = combineReducers({
  [jokes.constants.NAMESPACE]: jokes.reducer,
  async
})

export default rootReducer
