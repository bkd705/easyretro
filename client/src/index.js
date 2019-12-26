import React from 'react'
import ReactDOM from 'react-dom'
import { createClient, Provider as UrqlProvider, defaultExchanges } from 'urql'
import { BrowserRouter } from 'react-router-dom'
import { devtoolsExchange } from '@urql/devtools'

import App from './App'

import * as serviceWorker from './serviceWorker'

const client = createClient({
  url: 'http://localhost:4000',
  exchanges: [devtoolsExchange, ...defaultExchanges],
})

const Index = (
  <BrowserRouter>
    <UrqlProvider value={client}>
      <App />
    </UrqlProvider>
  </BrowserRouter>
)

ReactDOM.render(Index, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
