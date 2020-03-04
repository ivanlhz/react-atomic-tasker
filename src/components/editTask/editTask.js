import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styles from './editTask.module.scss'
import {FaEdit} from 'react-icons'

const defaultTask = {
  value: '',
  done: false
}

const EditTask = ({task, onAddTask, isEdit, id}) => {
  const [_task, setTask] = useState(task ? task : defaultTask)

  const taskKeyDownHandler = (event) => {
    if(event.key === 'Enter') {
      addTask(event.target.value)
    }
  }

  const handleChange = (event) => {
    setTask({value: event.target.value, done:false})
  }

  const clearInput = () => {
    setTask(defaultTask)
  }

  const addTask = (value) => {
    const newTask = {
      id,
      value: value,
      done: false
    };
    onAddTask(newTask)
    clearInput()
  }

  const onFocusHandler = () => {
    if(!isEdit) clearInput();
  }

  const getPlayholderText = () => {
    if (isEdit) {
      return 'press enter to update task'
    }
    return 'press enter to add new task'
  }

  return (
    <div className={styles.editTask}>
      <label htmlFor="edit task">
        <input type="text" name="taskDescription" onChange={handleChange} onKeyDown={taskKeyDownHandler} onFocus={onFocusHandler} placeholder={getPlayholderText()} value={_task.value}/>
      </label>
      <span>{ isEdit ? 'Update' : '+' }</span>
    </div>
  )
}

EditTask.propTypes = {
  id: PropTypes.number,
  task: PropTypes.object,
  onAddTask: PropTypes.func,
  isEdit: PropTypes.bool
}

export default EditTask