import React, {useState } from 'react'
import styles from './tasker.module.scss' 
import { EditTask, TaskList, Footer, Header } from '../'

export default () => {
  const [taskList, setTaskList] = useState([])

  const addTaskHandler = task => {
    setTaskList([...taskList, task])
  }

  const updateListHandler = list => {
    setTaskList([...list])
  }

  const getNavMenu = () => ([
    {url:'/login', text: 'Login'},
    {url:'', text: 'LogOut'}
  ])

  return (
    <div className={styles.main}> 
    <Header text="Tasker" navMenu={getNavMenu()}/>
      <div className={styles.wrapper}>
        <EditTask id={taskList.length + 1} onAddTask={addTaskHandler}/>
        <TaskList list={taskList} onUpdate={updateListHandler}/>
      </div>
      <Footer />
    </div>)
}
