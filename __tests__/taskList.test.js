import React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {TaskList} from '../src/components/'

it('Should be rendered with no data', () => {
  const {getByTestId, getByText} = render(<TaskList onUpdate={() => {}} />)
  expect(getByTestId('task-list')).toBeInTheDocument()
  expect(getByText('Please add new task')).toBeInTheDocument()
})

it('Should be rendered the list', () => {
  const list = [
    {id: 1, value: 'Task 1', done: false},
    {id: 2, value: 'Task 2', done: false}
  ]
  const {getByText} = render(<TaskList list={list} onUpdate={() => {}} />)
  list.map((element) => {
    expect(getByText(element.value)).toBeInTheDocument()
  })
})

test('Should remove the second element of the list', async() => {
  let testList = [
    {id: 1, value: 'Task 1', done: false},
    {id: 2, value: 'Task 2', done: false}
  ]
  const listCopy = [...testList]
  const updateList = (newList) => {
    testList = [...newList]
  }

  const {getByText, getAllByTestId, rerender, queryByText} = render(<TaskList list={testList} onUpdate={updateList} />)
  const btnListRemove = getAllByTestId('btn-remove')
  userEvent.click(btnListRemove[1])
  rerender(<TaskList list={testList} onUpdate={updateList} />)
  expect(getByText(listCopy[0].value)).toBeInTheDocument()
  expect(queryByText(listCopy[1].value)).toBeNull()
})

test('Should update the second element', () => {
  let testList = [
    {id: 1, value: 'Task 1', done: false},
    {id: 2, value: 'Task 2', done: false}
  ]
  const updateHandler = (list) => {
    testList = [...list]
  }

  const {getByText, getAllByTestId, getByDisplayValue} = render(<TaskList list={testList} onUpdate={updateHandler} />)
  const allEditButtons = getAllByTestId('btn-edit')
  userEvent.click(allEditButtons[1])

  const input = getByDisplayValue(testList[1].value)
  const updateBtn = getByText('Update')
  expect(input).toBeInTheDocument()
  expect(updateBtn).toBeInTheDocument()

  userEvent.type(input, '345')
  userEvent.click(updateBtn)
  expect(getByText('Task 2345')).toBeInTheDocument()
})
