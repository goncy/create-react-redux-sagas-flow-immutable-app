import {NAMESPACE} from './constants'
import {makeAction} from '../../utils/makeActionCreator'

export const fetchJoke = makeAction(`${NAMESPACE}/FETCH_JOKE`)
