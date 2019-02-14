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

  render() {
    return (
      <div>
        <Form />
        <List tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App
