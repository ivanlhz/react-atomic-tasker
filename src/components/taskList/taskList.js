import React, {Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {TaskBlock} from '../'
import './taskList.scss'

const TaskList = ({list, onUpdate}) => {
  const [dataList, setDataList] = useState(list ? list : [])

  useEffect(() => {
    setDataList(list)
  })

  const removeHandler = (id) => {
    const _list = dataList.filter(task => task.id !== id)
    onUpdate(_list)
  }

  const updateHandler = (task) => {
    let newList = [...dataList]
    newList = newList.map( t => {
      if (t.id === task.id) {
        t = task;
      }
      return t
    })
    onUpdate(newList)
  }

  return(
    <div data-testid="task-list" className="task-list">
    {
      dataList && dataList.length > 0 ? 
      dataList.map( task => <TaskBlock key={task.id} task={task} onRemove={() => removeHandler(task.id)} onUpdateTask={updateHandler} />)
      :
        <p className="no-data">Please add new task</p>
    }
    </div>
  )
}

TaskList.propTypes = {
  list: PropTypes.array,
  onUpdate: PropTypes.func.isRequired
}

export default TaskList