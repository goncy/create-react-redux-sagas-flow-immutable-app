import {NAMESPACE} from './constants'
import {makeAction} from 'async-action-creator'

export const fetchJoke = makeAction(`${NAMESPACE}/FETCH_JOKE`)
