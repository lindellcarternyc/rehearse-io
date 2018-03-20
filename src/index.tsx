import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router } from 'react-router-dom'

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
