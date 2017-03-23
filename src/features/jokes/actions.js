import {NAMESPACE} from './constants'
import {makeAction} from '../../utils/actionCreator/'

export const fetchJoke = makeAction(`${NAMESPACE}/FETCH_JOKE`)
