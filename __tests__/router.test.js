import React from 'react'
import {render} from '@testing-library/react'
import ApplicationRouter from '../src/router'
import FireApp from '../src/api/firebase'

describe('Router test file', () => {
  beforeEach(() => {
    FireApp.auth = jest.fn().mockReturnValue({
      onAuthStateChanged: jest.fn(() => null),
      signInWithEmailAndPassword: jest.fn(() => Promise.resolve(null)),
    })
  })

  test('Should render the component', () => {
    const {getByTestId} = render(<ApplicationRouter />)
    expect(getByTestId('login-form')).toBeInTheDocument()
  })
})
