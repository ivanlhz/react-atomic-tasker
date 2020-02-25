import {render} from '@testing-library/react'
import React from 'react'
import { Tasker } from '../src/components'
import userEvent from '@testing-library/user-event'

test('Tasker Component should be load', () => {
  const {getByText} = render(<Tasker />)
  expect(getByText(/Hello tasker/i)).toBeInTheDocument()
})

test('Should add new task to the task list', () => {
  const {getByText, getByPlaceholderText, rerender} = render(<Tasker />)
  const input = getByPlaceholderText('type task description')
  const addTaskBtn = getByText('Add')
  userEvent.type(input, 'TEST_TASK')
  userEvent.click(addTaskBtn)
  rerender(<Tasker />)
  expect(getByText('TEST_TASK')).toBeInTheDocument()
})

test('Should update the task list after edit one', () => {
  const {getByText, getByTestId, getByPlaceholderText, rerender, getByDisplayValue} = render(<Tasker />)
  const input = getByPlaceholderText('type task description')
  const addTaskBtn = getByText('Add')
  userEvent.type(input, 'TEST_TASK')
  userEvent.click(addTaskBtn)
  rerender(<Tasker />)
  userEvent.click(getByTestId('btn-edit'))
  const editInput = getByDisplayValue('TEST_TASK')
  userEvent.type(editInput, '123')
  userEvent.click(getByText('Update'))
  expect(getByText('TEST_TASK123')).toBeInTheDocument()
})
