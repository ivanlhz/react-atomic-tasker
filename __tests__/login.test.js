import React from 'react'
import {render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {AuthContext} from '../src/hooks/auth'
import {Login} from '../src/components'

test('Should render the login page', () => {
  const {getByTestId} = render(
    <MemoryRouter initialEntries={['/']}>
      <AuthContext.Provider value={{currentUser: undefined}}>
        <Login />
      </AuthContext.Provider>
    </MemoryRouter>,
  )
  expect(getByTestId('login-form')).toBeInTheDocument()
})

// test('Should render the login page', () => {
//   const user = {
//     name: 'ivanlhz@gmail.com',
//     pwd: '1234',
//   }
//   const mockedFireApp = jest.fn(() => {
//     const auth = () => Promise.resolve(user)
//     return {auth}
//   })
//   // mockedFireApp.mockResolvedValueOnce({data: {currentUser: 'pepe'}})
//   const {getByText, getByLabelText} = render(
//     <MemoryRouter initialEntries={['/']}>
//       <AuthContext.Provider value={{currentUser: undefined}}>
//         <Login loadFireApp={mockedFireApp} />
//       </AuthContext.Provider>
//     </MemoryRouter>,
//   )
//   const submitBtn = getByText(/Log in/i)
//   const inputEmail = getByLabelText(/email/i)
//   const inputPwd = getByLabelText(/password/i)
//   userEvent.type(inputEmail, user.name)
//   userEvent.type(inputPwd, user.pwd)
//   userEvent.click(submitBtn)
//   wait(() => {
//     expect(mockedFireApp).toHaveBeenCalledTimes(1)
//     expect(mockedFireApp).toHaveBeenCalledWith(user)
//   })
// })
