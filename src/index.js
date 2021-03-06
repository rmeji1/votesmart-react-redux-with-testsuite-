import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import thunk from 'react-thunk'

// TODO: Import reducer and add it to datastore
const api = 'https://votesmartflatiron.herokuapp.com/'
const store = createStore(null, applyMiddleware(thunk).withExtraArgument(api))

ReactDOM.render(
  <Provider store={store}>
    <Router><App /></Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
