import * as types from '../types'
import {makeAction} from '../utils/makeActionCreator'

export const fetchJoke = makeAction(types.FETCH_JOKE)
