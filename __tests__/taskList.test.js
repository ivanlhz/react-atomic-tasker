import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {TaskList} from '../src/components/'

it('Should be rendered with no data', () => {
  const {getByTestId, getByText} = render(<TaskList />)
  expect(getByTestId('task-list')).toBeInTheDocument()
  expect(getByText('Please add new task')).toBeInTheDocument()
})

it('Should be rendered the list', () => {
  const list = [
    {value: 'Task 1', done: false},
    {value: 'Task 2', done: false},
  ]
  const {getByText} = render(<TaskList list={list}/>)
  list.map((element) => {
    expect(getByText(element.value)).toBeInTheDocument()
  })
})

it('Should remove the first element of the list', () => {
  const testList = [
    {value: 'Task 1', done: false},
    {value: 'Task 2', done: false},
  ]
  const {getByText, getAllByTestId, debug} = render(<TaskList list={testList} />)
  const btnListRemove = getAllByTestId('btn-remove')
  debug()
  fireEvent.click(btnListRemove[1], btnListRemove.length)
  debug()
  expect(getByText(testList[0].value)).not.toBeInTheDocument()
  expect(getByText(testList[1].value)).toBeInTheDocument()

})
