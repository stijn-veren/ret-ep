import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './index.css'

function AppTwo() {
  return <h1>This is the Second App</h1>
}

ReactDOM.render(
  <React.Fragment>
    <App />
    <AppTwo />
  </React.Fragment>,
  document.getElementById('root')
)
