import {put, call, takeEvery} from 'redux-saga/effects'

import {API_URL} from '../constants'
import {fetchJoke} from '../actions'

function fetchJokeApi () {
  return fetch(API_URL)
    .then(response => response.json())
    .then(response => ({response}))
    .catch(error => ({error}))
}

function* fetchJokeSaga () {
  const {error, response} = yield call(fetchJokeApi)
  if (error) yield put(fetchJoke.failure(error))
  else if (response) yield put(fetchJoke.success(response))
}

function* fetchJokeWatcher () {
  yield takeEvery(fetchJoke.type, fetchJokeSaga)
}

export default [
  fetchJokeWatcher
]
