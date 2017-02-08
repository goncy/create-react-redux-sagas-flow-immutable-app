import {put, call, takeEvery} from 'redux-saga/effects'

import {fetchJoke} from '../actions/api'

export function fetchJokeApi () {
  return fetch('https://api.chucknorris.io/jokes/random')
    .then(response => ({response: response.json()}))
    .catch(error => ({error}))
}

export function* fetchJokeSaga (): void {
  const {error, response} = yield call(fetchJokeApi)
  if (error) yield put(fetchJoke.failure(error))
  else if (response) yield put(fetchJoke.success(response))
}

export function* fetchJokeWatcher (): void {
  yield takeEvery(fetchJoke.type, fetchJokeSaga)
}

export default [
  fetchJokeWatcher
]
