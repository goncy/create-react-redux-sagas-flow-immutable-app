import {fork} from 'redux-saga/effects'

import jokes from '../../features/jokes'

function startSagas (...sagas) {
  return function * rootSaga () {
    yield sagas.map(saga => saga.map(fork))
  }
}

export default startSagas(
  ...jokes.sagas
)
