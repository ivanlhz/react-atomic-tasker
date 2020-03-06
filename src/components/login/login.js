import React from 'react'
import styles from './login.module.scss'
import {Link, withRouter} from 'react-router-dom'

const Login = () => {
  return (
    <>
      <h2 className={styles.loginForm}>LOGIN</h2>
      <Link to='tasker'>Go to tasker</Link>
    </>
  )
}

export default withRouter(Login)
