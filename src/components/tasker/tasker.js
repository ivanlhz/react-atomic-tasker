import React, {useState } from 'react'
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
  }

  return (
    <> 
      <h1>Hello tasker!!</h1>
      <EditTask onAddTask={addTaskHandler}/>
      <TaskList list={taskList} onUpdate={updateListHandler}/>
    </>)
}
