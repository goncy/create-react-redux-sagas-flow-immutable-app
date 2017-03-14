// Sagas
import fetchSaga from './sagas/fetch'
import populateSaga from './sagas/populate'
// Reducers
import reducer from './reducer'
// Constants
import * as constants from './constants'
// Actions
import * as actions from './actions'
// Scenes
import List from './scenes/List'

export default {
  actions,
  constants,
  reducer,
  sagas: [
    fetchSaga,
    populateSaga
  ],
  scenes: {
    List
  }
}
