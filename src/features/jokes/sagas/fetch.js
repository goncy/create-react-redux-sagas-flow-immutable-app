import {takeEvery} from 'redux-saga/effects'
import apiSaga from 'redux-saga-api-call'

import {API_URL} from '../constants'
import {fetchJoke} from '../actions'

function fetchJokeApi () {
  return fetch(API_URL)
    .then(response => response.json())
    .then(response => ({response}))
    .catch(error => ({error}))
}

function* fetchJokeWatcher () {
  yield takeEvery(
    fetchJoke.type,
    apiSaga(fetchJokeApi)
  )
}

export default [
  fetchJokeWatcher
]
