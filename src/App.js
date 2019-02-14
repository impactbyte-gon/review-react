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

  render() {
    return (
      <div>
        <Form addTask={this.addTask} />
        <List tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App
