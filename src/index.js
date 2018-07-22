import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import injectGlobalStyles from './injectGlobalStyle'

injectGlobalStyles()

ReactDOM.render(<App />, document.getElementById('root'))
