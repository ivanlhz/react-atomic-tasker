import React, {createContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import FireApp from '../api/firebase'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    FireApp.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
  children: PropTypes.element,
}
