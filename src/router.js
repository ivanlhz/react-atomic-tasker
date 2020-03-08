import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Login, Tasker} from './components'
import {AuthProvider} from './hooks/auth'

const ApplicationRouter = () => (
  <AuthProvider>
    <BrowserRouter>
      <Route exact path='/' component={Login} />
      <Route exact path='/tasker' component={Tasker} />
    </BrowserRouter>
  </AuthProvider>
)

export default ApplicationRouter
