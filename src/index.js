import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import Root from './Root'
import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
