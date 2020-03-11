import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {EditTask} from '../src/components'

const placeHolderText = 'press enter to add new task'

test('Should be render', () => {
  const {getByPlaceholderText, getByText} = render(<EditTask />)

  expect(getByPlaceholderText(placeHolderText)).toBeInTheDocument()
  expect(getByText('+')).toBeInTheDocument()
})

test('Should add new task after press enter', () => {
  const mockFunction = jest.fn()
  const {getByPlaceholderText} = render(<EditTask onAddTask={mockFunction} />)
  const input = getByPlaceholderText(placeHolderText)
  userEvent.type(input, 'New Task')
  fireEvent.keyDown(input, {key: 'Enter', keyCode: 13})
  expect(mockFunction).toHaveBeenCalledTimes(1)
})

test('Should clear the input field after focus', () => {
  const {getByPlaceholderText} = render(<EditTask />)
  const input = getByPlaceholderText(placeHolderText)
  input.focus()
  expect(input.value).toBe('')
})

test("Shouldn't clear the input field after focus", () => {
  const task = {
    id: 1,
    value: 'Test',
    done: false,
  }
  const {getByPlaceholderText} = render(<EditTask task={task} isEdit={true} />)
  const input = getByPlaceholderText('press enter to update task')
  input.focus()
  expect(input.value).not.toBe('')
})
