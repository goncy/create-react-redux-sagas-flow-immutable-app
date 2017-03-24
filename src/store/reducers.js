import { combineReducers } from 'redux'

import jokes from '../../features/jokes'
import {reducer as async} from '../../utils/actionCreator/'

const rootReducer = combineReducers({
  [jokes.constants.NAMESPACE]: jokes.reducer,
  async
})

export default rootReducer
