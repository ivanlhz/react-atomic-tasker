import React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Header} from '../src/components'

describe('Header menu', () => {
  test('Has title, element list without action', () => {
    const text = 'Test'
    const navMenu = [{url: '', text: 'Logout'}]

    const {getByText} = render(<Header text={text} navMenu={navMenu} />)
    const menuItem = getByText(/logout/i)
    expect(getByText(/test/i)).toBeInTheDocument()
    expect(menuItem).toBeInTheDocument()
    userEvent.click(menuItem)
  })
})
