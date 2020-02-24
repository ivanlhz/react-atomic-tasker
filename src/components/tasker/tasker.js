import React, { Component, useState, useEffect } from 'react'
import './tasker.scss' 
import { EditTask } from '../editTask'
import { TaskList } from '../taskList'

export default () => {
  const [taskList, setTaskList] = useState([])

  const addTaskHandler = (task) => {
    task.id = taskList.length + 1
    setTaskList([...taskList, task])
  }

  const updateListHandler = (list) => {
    setTaskList([...list])
    console.log(list,taskList)
  }

  return (
    <> 
      <h1>Hello tasker!!</h1>
      <EditTask onAddTask={addTaskHandler}/>
      <TaskList list={taskList} onUpdate={(list) => updateListHandler(list)}/>
    </>)
}
