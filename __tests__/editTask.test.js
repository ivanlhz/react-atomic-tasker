import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {EditTask} from '../src/components'

test('Should be render', () => {
  const {getByPlaceholderText, getByText} = render(<EditTask />)
  const input = getByPlaceholderText('type task description')
  const btn = getByText('Add')

  expect(input).toBeTruthy()
  expect(btn).toBeTruthy() 
})

test('Should add new task after press add button' , () => {
  const mockFunction = jest.fn();
  const {getByPlaceholderText, getByText} = render(<EditTask onAddTask={mockFunction} />)
  const input = getByPlaceholderText('type task description')
  const btn = getByText('Add')
  userEvent.type(input,'New Task')
  userEvent.click(btn)
  expect(mockFunction.mock.calls.length).toBe(1)
})

test('Should add new task after press enter' , () => {
  const mockFunction = jest.fn();
  const {getByPlaceholderText} = render(<EditTask onAddTask={mockFunction} />)
  const input = getByPlaceholderText('type task description')
  userEvent.type(input,'New Task')
  fireEvent.keyDown(input, {key: 'Enter', keyCode: 13})
  expect(mockFunction.mock.calls.length).toBe(1)
})

test('Should clear the input field after focus' , () => {
  const {getByPlaceholderText} = render(<EditTask />)
  const input = getByPlaceholderText('type task description')
  input.focus()
  expect(input.value).toBe('')
})