import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {FiEdit} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import {EditTask} from '../editTask'
import './taskBlock.scss'

const TaskBlock = ({task, onRemove, onUpdateTask}) => {
  const [_task, setTask] = useState(task)
  const [editable, setEditabe] = useState(false)

  const editHandler = () => {
    setEditabe(true)
  }

  const addTaskHandle = (data) => {
    setTask(data)
    setEditabe(false)
    onUpdateTask(data)
  }

  const doneHandle = () => {
    setTask({
      ..._task,
      done: !_task.done
    })
  }

  return (
    <div className={'task-block'}>
      {
        editable 
        ?
          <EditTask task={_task} onAddTask={addTaskHandle} />
        : 
          <>
            <p className={_task.done ? 'task-done' : ''} onClick={doneHandle}>
              {_task.value}
            </p> 
            <button data-testid="btn-edit" onClick={editHandler}><FiEdit /></button>
            <button data-testid="btn-remove" onClick={onRemove}><MdDelete /></button>
          </>
      }
    </div>
  )
}

TaskBlock.propTypes = {
  task: PropTypes.object.isRequired, 
  onRemove: PropTypes.func.isRequired, 
  onUpdateTask: PropTypes.func.isRequired
}

export default TaskBlock