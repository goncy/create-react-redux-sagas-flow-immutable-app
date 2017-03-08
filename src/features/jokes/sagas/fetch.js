import {put, call, takeEvery} from 'redux-saga/effects'

import {fetchJoke} from '../actions'

function fetchJokeApi () {
  return fetch('https://api.chucknorris.io/jokes/random')
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
