import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="What task to do?" />
          <input type="submit" value="Add" />
        </form>
        <ul>
          <li>Learning JavaScript</li>
          <li>Eating a lunch</li>
          <li>Sleeping on the bed</li>
        </ul>
      </div>
    )
  }
}

export default App
