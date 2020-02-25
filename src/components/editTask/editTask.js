import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './editTask.scss'

const defaultTask = {
  value: '',
  done: false
}

const EditTask = ({task, onAddTask, isEdit}) => {
  const [_task, setTask] = useState(task ? task : defaultTask)

  const taskKeyDownHandler = (event) => {
    if(event.key === 'Enter') {
      addTask(event.target.value)
    }
  }

  const addTaskHandler = () => {
    addTask(_task.value)
  }

  const handleChange = (event) => {
    setTask({value: event.target.value, done:false})
  }

  const clearInput = () => {
    setTask(defaultTask)
  }

  const addTask = (value) => {
    const newTask = {
      value: value,
      done: false
    };
    onAddTask(newTask)
    clearInput()
  }

  const onFocusHandler = () => {
    if(!isEdit) clearInput();
  }

  return (
    <div className="edit-task">
      <label htmlFor="edit task">
        <input type="text" name="taskDescription" onChange={handleChange} onKeyDown={taskKeyDownHandler} onFocus={onFocusHandler} placeholder="type task description" value={_task.value}/>
      </label>
      <button onClick={addTaskHandler}>{ isEdit ? 'Update' : 'Add' }</button>
    </div>
  )
}

EditTask.propTypes = {
  task: PropTypes.object,
  onAddTask: PropTypes.func,
  isEdit: PropTypes.bool
}

export default EditTask