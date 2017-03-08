import {NAMESPACE} from './constants'
import {makeAction} from '../../utils/makeActionCreator'

export const appInitialized = makeAction(`${NAMESPACE}/APP_INITALIZED`)
