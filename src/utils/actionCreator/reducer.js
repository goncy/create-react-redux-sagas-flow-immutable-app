// @flow

import {divideAction, getError, getStatus, isAsync} from './utils'
import {standardAction} from '../../flowtypes/global'

export type asyncReducerType = {
  [name: string]: {
    status: string,
    error: ?string,
    response: ?any
  }
}

const asyncReducer = (state: asyncReducerType = {}, action: standardAction) => {
  if (isAsync(action)) {
    const {type, status} = divideAction(action)
    return {
      ...state,
      [type]: {
        status: getStatus(status),
        error: status === 'FAILURE' ? getError(action) : null,
        response: ['FAILURE', 'SUCCESS'].includes(status) ? action.payload : null
      }
    }
  }
  return state
}

export default asyncReducer
