import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import App from './containers/App'


import * as serviceWorker from './serviceWorker';

import './styles/index.css'



ReactDOM.render(
  <div className="app"><Provider store={store}>
    <App />
  </Provider></div>,
  document.getElementById('root')
)

serviceWorker.unregister();