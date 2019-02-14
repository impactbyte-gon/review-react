import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: ''
    }
  }

  handleChange = event => {
    // this.handleChange = this.handleChange.bind(this)
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          this.props.addTask(this.state.inputText)
        }}
      >
        <input
          type="text"
          placeholder="Your task here"
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default Form
