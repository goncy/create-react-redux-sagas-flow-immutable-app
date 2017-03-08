import fetchSaga from './sagas/fetch'
import reducer from './reducer'
import * as constants from './constants'
import * as actions from './actions'

import List from './scenes/List'

export default {
  actions,
  constants,
  reducer,
  sagas: [
    fetchSaga
  ],
  scenes: {
    List
  }
}
