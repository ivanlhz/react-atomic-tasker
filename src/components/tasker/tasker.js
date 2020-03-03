import React, {useState } from 'react'
import styles from './tasker.module.scss' 
import { EditTask, TaskList, Footer } from '../'

export default () => {
  const [taskList, setTaskList] = useState([])

  const addTaskHandler = (task) => {
    setTaskList([...taskList, task])
  }

  const updateListHandler = (list) => {
    setTaskList([...list])
  }

  return (
    <div className={styles.main}> 
      <h1>Tasker</h1>
      <div className={styles.wrapper}>
        <EditTask id={taskList.length + 1} onAddTask={addTaskHandler}/>
        <TaskList list={taskList} onUpdate={updateListHandler}/>
      </div>
      <Footer />
    </div>)
}
