import React, { Component } from 'react'

import Form from './components/Form'
import List from './components/List'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: ['Learning JavaScript', 'Eating a lunch', 'Sleeping on the bed']
    }
  }

  addTask = inputText => {
    const newTasks = this.state.tasks.concat(inputText)

    this.setState({
      tasks: newTasks
    })
  }

  deleteTask = index => {
    const newTasks = this.state.tasks.filter((item, itemIndex) => {
      return index !== itemIndex
    })

    this.setState({
      tasks: newTasks
    })
  }

  editTask = index => {
    const text = prompt(`Edit text for index ${index}:`)

    if (text !== null) {
      const newTasks = this.state.tasks.map((item, itemIndex) => {
        if (index === itemIndex) {
          return text
        } else {
          return item
        }
      })

      this.setState({
        tasks: newTasks
      })
    }
  }

  render() {
    return (
      <div>
        <Form addTask={this.addTask} />
        <List
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
        />
      </div>
    )
  }
}

export default App
