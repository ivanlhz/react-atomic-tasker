import React, {useCallback, useContext, useState} from 'react'
import PropTypes from 'prop-types'
import styles from './login.module.scss'
import {withRouter, Redirect} from 'react-router-dom'
import {AuthContext} from '../../hooks/auth'
import FireApp from '../../api/firebase'

const Login = ({history}) => {
  const [error, setError] = useState(undefined)
  const handleLogin = useCallback(
    async event => {
      event.preventDefault()
      const {email, password} = event.target.elements
      try {
        await FireApp.auth().signInWithEmailAndPassword(
          email.value,
          password.value,
        )
        history.push('/tasker')
      } catch (error) {
        setError(error.message)
      }
    },
    [history],
  )
  const {currentUser} = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to='/tasker' />
  }

  return (
    <div data-testid='login-form' className={styles.loginForm}>
      <h2>Welcome to Tasker!!</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name='email' type='email' placeholder='Email' />
        </label>
        <label>
          Password
          <input name='password' type='password' placeholder='Password' />
        </label>
        <button type='submit'>Log in</button>
      </form>
      {error && <div className={styles.loginError}>{error}</div>}
    </div>
  )
}
Login.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Login)
