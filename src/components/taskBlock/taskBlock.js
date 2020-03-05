import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {FiEdit} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import {EditTask} from '../editTask'
import styles from './taskBlock.module.scss'

const TaskBlock = ({task, onRemove, onUpdateTask}) => {
  const [_task, setTask] = useState(task)
  const [editable, setEditabe] = useState(false)

  const editHandler = () => {
    setEditabe(true)
  }

  const addTaskHandle = data => {
    setTask(data)
    setEditabe(false)
    onUpdateTask(data)
  }

  const doneHandle = () => {
    setTask({
      ..._task,
      done: !_task.done,
    })
  }

  return (
    <div className={styles.taskBlock}>
      {editable ? (
        <EditTask
          id={_task.id}
          task={_task}
          onAddTask={addTaskHandle}
          isEdit={true}
        />
      ) : (
        <>
          <p className={_task.done ? 'task-done' : ''} onClick={doneHandle}>
            {_task.value}
          </p>
          <button
            className={styles.edit}
            data-testid='btn-edit'
            onClick={editHandler}
          >
            <FiEdit />
          </button>
          <button
            className={styles.remove}
            data-testid='btn-remove'
            onClick={onRemove}
          >
            <MdDelete />
          </button>
        </>
      )}
    </div>
  )
}

TaskBlock.propTypes = {
  task: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
}

export default TaskBlock
