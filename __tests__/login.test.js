import React from 'react'
import {render, wait, cleanup} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {AuthContext} from '../src/hooks/auth'
import userEvent from '@testing-library/user-event'
import {Login} from '../src/components'
import FireApp from '../src/api/firebase/'

afterEach(cleanup)

describe('Login page', () => {
  test('Should render the login', () => {
    const {getByTestId} = render(
      <MemoryRouter initialEntries={['/']}>
        <AuthContext.Provider value={{currentUser: undefined}}>
          <Login />
        </AuthContext.Provider>
      </MemoryRouter>,
    )
    expect(getByTestId('login-form')).toBeInTheDocument()
  })

  test('Should  call signInWithEmailAndPassword', () => {
    const user = {
      name: 'ivanlhz@gmail.com',
      pwd: '1234',
    }
    FireApp.auth = jest.fn().mockReturnValue({
      signInWithEmailAndPassword: jest.fn(() => Promise.resolve(null)),
    })

    const {getByText, getByLabelText} = render(
      <MemoryRouter initialEntries={['/']}>
        <AuthContext.Provider value={{currentUser: undefined}}>
          <Login />
        </AuthContext.Provider>
      </MemoryRouter>,
    )
    const submitBtn = getByText(/Log in/i)
    const inputEmail = getByLabelText(/email/i)
    const inputPwd = getByLabelText(/password/i)
    userEvent.type(inputEmail, user.name)
    userEvent.type(inputPwd, user.pwd)
    userEvent.click(submitBtn)
    expect(FireApp.auth().signInWithEmailAndPassword).toHaveBeenCalledTimes(1)
  })

  test('Should reject the call signInWithEmailAndPassword and show the error message', () => {
    const user = {
      name: 'ivanlhz@gmail.com',
      pwd: '1234',
    }
    FireApp.auth = jest.fn().mockReturnValue({
      signInWithEmailAndPassword: jest.fn(() =>
        Promise.reject({message: 'Login fail'}),
      ),
    })

    const {getByText, getByLabelText} = render(
      <MemoryRouter initialEntries={['/']}>
        <AuthContext.Provider value={{currentUser: undefined}}>
          <Login />
        </AuthContext.Provider>
      </MemoryRouter>,
    )
    const submitBtn = getByText(/Log in/i)
    const inputEmail = getByLabelText(/email/i)
    const inputPwd = getByLabelText(/password/i)
    userEvent.type(inputEmail, user.name)
    userEvent.type(inputPwd, user.pwd)
    userEvent.click(submitBtn)

    wait(() => {
      expect(getByText(/Login fail/i)).toBeTruthy()
    })
  })
})
