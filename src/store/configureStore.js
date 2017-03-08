import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'
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
  // Run saga middleware
  sagaMiddleware.run(rootSaga)
  // Return store
  return store
}
