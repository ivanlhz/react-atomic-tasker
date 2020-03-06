import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Login, Tasker} from './components'

const ApplicationRouter = () => (
  <BrowserRouter>
    <Route exact path='/' component={Login} />
    <Route exact path='/tasker' component={Tasker} />
  </BrowserRouter>
)

export default ApplicationRouter
