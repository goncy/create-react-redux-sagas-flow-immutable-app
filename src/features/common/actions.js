import {NAMESPACE} from './constants'
import {makeAction} from 'async-action-creator'

export const appInitialized = makeAction(`${NAMESPACE}/APP_INITALIZED`)
