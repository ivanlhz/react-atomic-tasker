import {render, fireEvent} from '@testing-library/react'
import React from 'react'
import { Tasker } from '../src/components'
import userEvent from '@testing-library/user-event'

const placeHolderText = 'press enter to add new task'

test('Tasker Component should be load', () => {
  const {getByText} = render(<Tasker />)
  expect(getByText(/tasker/i)).toBeInTheDocument()
})

test('Should add new task to the task list', () => {
  const {getByText, getByPlaceholderText, rerender} = render(<Tasker />)
  const input = getByPlaceholderText(placeHolderText)
  userEvent.type(input, 'TEST_TASK')
  fireEvent.keyDown(input, {key: 'Enter', keyCode: 13 })
  rerender(<Tasker />)
  expect(getByText('TEST_TASK')).toBeInTheDocument()
})

test('Should update the task list after edit one', () => {
  const {getByText, getByTestId, getByPlaceholderText, rerender, getByDisplayValue} = render(<Tasker />)
  const input = getByPlaceholderText(placeHolderText)
  userEvent.type(input, 'TEST_TASK')
  fireEvent.keyDown(input, {key:'Enter', keyCode:13})
  rerender(<Tasker />)
  userEvent.click(getByTestId('btn-edit'))
  expect(getByText('Update')).toBeInTheDocument()
  const editInput = getByDisplayValue('TEST_TASK')
  userEvent.type(editInput, '123')
  fireEvent.keyDown(editInput, {key:'Enter', keyCode:13})

  expect(getByText('TEST_TASK123')).toBeInTheDocument()
})
