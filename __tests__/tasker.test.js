import {render, fireEvent} from '@testing-library/react'
import {Router} from 'react-router-dom'
import React from 'react'
import {createMemoryHistory} from 'history'
import {Tasker} from '../src/components'
import userEvent from '@testing-library/user-event'

const placeHolderText = 'press enter to add new task'

test('Tasker Component should be load', () => {
  const history = createMemoryHistory()
  const {getByText} = render(
    <Router history={history}>
      <Tasker />
    </Router>,
  )
  expect(getByText(/tasker/i)).toBeInTheDocument()
})

test('Should add new task to the task list', () => {
  const history = createMemoryHistory()
  const {getByText, getByPlaceholderText, rerender} = render(
    <Router history={history}>
      <Tasker />
    </Router>,
  )
  const input = getByPlaceholderText(placeHolderText)
  userEvent.type(input, 'TEST_TASK')
  fireEvent.keyDown(input, {key: 'Enter', keyCode: 13})
  rerender(
    <Router history={history}>
      <Tasker />
    </Router>,
  )
  expect(getByText('TEST_TASK')).toBeInTheDocument()
})

test('Should update the task list after edit one', () => {
  const history = createMemoryHistory()
  const {
    getByText,
    getByTestId,
    getByPlaceholderText,
    rerender,
    getByDisplayValue,
  } = render(
    <Router history={history}>
      <Tasker />
    </Router>,
  )
  const input = getByPlaceholderText(placeHolderText)
  userEvent.type(input, 'TEST_TASK')
  fireEvent.keyDown(input, {key: 'Enter', keyCode: 13})
  rerender(
    <Router history={history}>
      <Tasker />
    </Router>,
  )
  userEvent.click(getByTestId('btn-edit'))
  expect(getByText('Update')).toBeInTheDocument()
  const editInput = getByDisplayValue('TEST_TASK')
  userEvent.type(editInput, '123')
  fireEvent.keyDown(editInput, {key: 'Enter', keyCode: 13})

  expect(getByText('TEST_TASK123')).toBeInTheDocument()
})
