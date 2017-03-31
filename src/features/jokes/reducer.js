// @flow

import {List} from 'immutable'

import {fetchJoke} from './actions'

import type {JokesAction, JokesState} from '../../flowtypes/jokes'

const jokes = (
  state: JokesState = List(),
  {type, payload}: JokesAction) => {
  switch (type) {
    case fetchJoke.SUCCESS:
      return state.push(payload)
    default:
      return state
  }
}

export default jokes
