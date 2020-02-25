import React from 'react'
import {TaskBlock} from '../src/components'
import {render, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

it('Should be render ', () => {
  const task = {
    value: 'Buy cofee',
    done: false
  }
  const {getByText} = render(<TaskBlock id={1} task={task} onUpdateTask={() => {}} onRemove={()=>{}}/>)
  expect(getByText(task.value)).toBeInTheDocument()
})

it('Should add class "task-done" when the task is done', () => {
  const task = {
    value: 'Buy cofee',
    done: false
  }
  const {getByText} = render(<TaskBlock id={1} task={task} onUpdateTask={() => {}} onRemove={()=>{}}/>)
  const element = getByText(task.value)
  userEvent.click(element)

  expect(element.className).toBe('task-done')
} )

it('Should call onRemove function ', () => {
  const task = {
    value: 'Buy cofee',
    done: false
  }

  const mockFunction = jest.fn()
  const {getByTestId} = render(<TaskBlock id={1} task={task} onUpdateTask={() => {}} onRemove={mockFunction}/>)
  const btnRemove = getByTestId('btn-remove')
  userEvent.click(btnRemove)
  expect(mockFunction.mock.calls.length).toBe(1)
})

it('Should call onUpdate function ', () => {
  const task = {
    value: 'Buy cofee',
    done: false
  }

  const mockFunction = jest.fn()
  const {getByTestId, getByPlaceholderText, getByText} = render(<TaskBlock id={1} task={task} onUpdateTask={mockFunction} onRemove={()=>{}}/>)
  const btnEdit = getByTestId('btn-edit')
  userEvent.click(btnEdit)

  const input = getByPlaceholderText('type task description')
  const btn = getByText('Update')
  fireEvent.change(input, { target: { value: 'New Task' } })
  userEvent.click(btn)

  const element = getByText('New Task')

  expect(mockFunction.mock.calls.length).toBe(1)
  expect(element).toBeInTheDocument()
})