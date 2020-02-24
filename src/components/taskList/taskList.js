import React, {Component } from 'react'
import PropTypes from 'prop-types'
import {TaskBlock} from '../'
import './taskList.scss'


class TaskList extends Component {
  state = {
    dataList: this.props.list ? this.props.list : []
  }

  static getDerivedStateFromProps(props, state) {
    if (JSON.stringify(props.list) !== JSON.stringify(state.dataList)) {
      return {
        dataList: props.list
      };
    }
    return null;
  }

  removeHandler = (id) => {
    const _list = this.state.dataList.filter(task => task.id !== id)
    this.setState({dataList: _list})
    this.props.onUpdate(_list)
  }

  updateHandler = (task) => {
    let newList = [...this.state.dataList]
    newList = newList.map( t => {
      if (t.id === task.id) {
        t = task;
      }
      return t
    })
    this.setState({dataList:newList})
    this.props.onUpdate(newList)
  }

  render () {
    const {dataList} = this.state
    return(
      <div data-testid="task-list" className="task-list">
      {
        dataList && dataList.length > 0 ? 
        dataList.map( task => <TaskBlock key={task.id} task={task} onRemove={() => this.removeHandler(task.id)} onUpdateTask={this.updateHandler}/>)
        :
          <p className="no-data">Please add new task</p>
      }
      </div>
    )
  }
}

TaskList.propTypes = {
  list: PropTypes.array,
  onUpdate: PropTypes.func.isRequired
}

export default TaskList