// @flow

import {List} from 'immutable'

import {fetchJoke} from '../actions'

type jokesAction = {
  type: string,
  payload: any
}

type jokeResponse = {
  category: ?string,
  icon_url: string,
  id: string,
  url: string,
  value: string
}

type jokesState = List<jokeResponse>

const jokes = (state: jokesState = List(), {type, payload}: jokesAction) => {
  switch (type) {
    case fetchJoke.SUCCESS:
      return state.push(payload)
    default:
      return state
  }
}

export const getJokes = (jokes: jokesState): List<string> => jokes
  .map(joke => joke.value)

export default jokes
