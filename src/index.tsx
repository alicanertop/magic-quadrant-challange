import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './screens'

import './styles/index.scss'

function Index() {
  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
