import {fork} from 'redux-saga/effects'

import jokes from './jokes'


function startSagas (...sagas) {
  return function * rootSaga () {
    yield sagas.map(saga => fork(saga))
  }
}

export default startSagas(
  ...jokes
)
