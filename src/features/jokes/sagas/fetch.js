import {takeEvery} from 'redux-saga/effects'

import {API_URL} from '../constants'
import {fetchJoke} from '../actions'
import apiSaga from 'redux-saga-api-call'

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
