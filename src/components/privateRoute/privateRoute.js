import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {AuthContext} from '../../hooks/auth'

const PrivateRoute = ({component: RouterComponent, ...rest}) => {
  const {currentUser} = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? <RouterComponent {...props} /> : <Redirect to={'/'} />
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
}

export default PrivateRoute
