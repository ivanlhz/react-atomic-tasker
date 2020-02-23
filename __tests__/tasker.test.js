import {render} from '@testing-library/react'
import React from 'react'
import { Tasker } from '../src/components'

test('Tasker Component should be load', () => {
  const {getByText} = render(<Tasker />)
  expect(getByText(/Hello tasker/i)).toBeInTheDocument()
})
