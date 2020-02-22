import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './editTask.scss'

const EditTask = (props) => {
  const [task, setTask] = useState('')

  const taskKeyDownHandler = (event) => {
    if(event.key === 'Enter') {
      addTask(event.target.value)
    }
  }

  const changeTaskHandler = (event) => {
    setTask(event.target.value)
  }

  const addTaskHandler = () => {
    addTask(task)
  }

  const addTask = (value) => {
    const newTask = {
      value,
      done: false
    };
    props.onAddTask(newTask)
    setTask('')
  }

  return (
    <div className="edit-task">
      <label htmlFor="edit task">
        <input type="text" name="taskDescription" onChange={changeTaskHandler} onKeyDown={taskKeyDownHandler} placeholder="type task description" value={task}/>
      </label>
      <button onClick={addTaskHandler}>Add</button>
    </div>
  )
}

EditTask.propTypes = {
  onAddTask: PropTypes.func
}

export default EditTask