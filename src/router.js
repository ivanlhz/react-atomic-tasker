import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Login, Tasker, PrivateRoute} from './components'
import {AuthProvider} from './hooks/auth'

const ApplicationRouter = () => (
  <AuthProvider>
    <Router>
      <Route exact path='/' component={Login} />
      <PrivateRoute exact path='/tasker' component={Tasker} />
    </Router>
  </AuthProvider>
)

export default ApplicationRouter
