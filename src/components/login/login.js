import React, {useCallback, useContext} from 'react'
import PropTypes from 'prop-types'
import styles from './login.module.scss'
import {withRouter, Redirect} from 'react-router-dom'
import {AuthContext} from '../../hooks/auth'
import fireApp from '../../api/firebase'

const Login = ({history}) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault()
      const {email, password} = event.target.elements
      try {
        await fireApp
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
        history.push('/tasker')
      } catch (error) {
        alert(error)
      }
    },
    [history],
  )
  const {currentUser} = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to='/tasker' />
  }

  return (
    <div className={styles.loginForm}>
      <h2>Log in</h2>
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
    </div>
  )
}
Login.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Login)
