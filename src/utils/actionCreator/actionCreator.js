// @flow

import type {asyncReducerType} from './reducer'

type asyncState = {
  [name: string]: ?any,
  async: asyncReducerType
}

type asyncAction = {
  type: string,
  start: (payload: ?any) => {type: string, payload: any},
  success: (payload: ?any) => {type: string, payload: any},
  failure: (payload: ?any) => {type: string, payload: any},
  getStatus: (state: asyncState) => string,
  getError: (state: asyncState) => ?string,
  getResponse: (state: asyncState) => ?any,
  START: string,
  SUCCESS: string,
  FAILURE: string
}

export const makeAction = (type: string): asyncAction => ({
  type,
  run: payload => ({type, payload}),
  start: payload => ({type: `${type}_START`, payload}),
  success: payload => ({type: `${type}_SUCCESS`, payload}),
  failure: payload => ({type: `${type}_FAILURE`, payload}),
  getStatus: ({async}: asyncState) => async[type] ? async[type].status : 'init',
  getError: ({async}: asyncState) => async[type] ? async[type].error : null,
  getResponse: ({async}: asyncState) => async[type] ? async[type].response : null,
  START: `${type}_START`,
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`
})

export default makeAction
