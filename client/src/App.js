import React from 'react'
import { Route } from 'react-router-dom'
import './styles.css'

import { Home } from './screens/Home'
import { Team } from './screens/Team'

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/:teamName" component={Team} />
    </div>
  )
}

export default App
