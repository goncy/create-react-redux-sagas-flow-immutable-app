import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from '../reducers'
import rootSaga from '../sagas'
import sagaMonitor from '../utils/sagaMonitor'

export default function configureStore () {
  // Saga middleware
  const sagaMiddleware = createSagaMiddleware({sagaMonitor})
  // Redux devtool
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  // Store
  const store = {
    ...createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    )
  }
  // History
  const history = syncHistoryWithStore(browserHistory, store)
  // Run saga middleware
  sagaMiddleware.run(rootSaga)
  // Return store and history
  return {
    store,
    history
  }
}
