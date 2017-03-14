import {delay} from 'redux-saga'
import {put, take, call} from 'redux-saga/effects'

import {fetchJoke} from '../actions'
import common from '../../common'

function* populateJokesSaga () {
  for (let i = 0; i < 10; i++) {
    yield put(fetchJoke.run())
    yield delay(1000)
  }
}

function* populateJokesWatcher () {
  yield take(common.actions.appInitialized.type)
  yield call(populateJokesSaga)
}

export default [
  populateJokesWatcher
]
