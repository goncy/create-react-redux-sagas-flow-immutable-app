// @flow

import {List} from 'immutable'

import {fetchJoke} from '../actions'

type JokesAction = {
  type: string,
  payload: any
}

type JokeResponse = {
  category: ?string,
  icon_url: string,
  id: string,
  url: string,
  value: string
}

type jokesState = List<JokeResponse>

const jokes = (
  state: jokesState = List(),
  {type, payload}: JokesAction) => {
  switch (type) {
    case fetchJoke.SUCCESS:
      return state.push(payload)
    default:
      return state
  }
}

export default jokes
