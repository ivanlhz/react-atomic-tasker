import React, {useState} from 'react'
import styles from './tasker.module.scss'
import {withRouter} from 'react-router-dom'
import {EditTask, TaskList, Footer, Header} from '../'
import fireApp from '../../api/firebase'

const Tasker = () => {
  const [taskList, setTaskList] = useState([])

  const addTaskHandler = task => {
    setTaskList([...taskList, task])
  }

  const updateListHandler = list => {
    setTaskList([...list])
  }

  const logoutHanlder = e => {
    e.preventDefault()
    fireApp.auth().signOut()
  }

  const getNavMenu = () => [{url: '', text: 'Logout', action: logoutHanlder}]

  return (
    <div className={styles.main}>
      <Header text='Tasker' navMenu={getNavMenu()} />
      <div className={styles.wrapper}>
        <EditTask id={taskList.length + 1} onAddTask={addTaskHandler} />
        <TaskList list={taskList} onUpdate={updateListHandler} />
      </div>
      <Footer />
    </div>
  )
}

export default withRouter(Tasker)
