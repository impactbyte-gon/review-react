import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form``

const InputText = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
`

const InputSubmit = styled.input`
  background: green;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 6px 10px;
  margin-left: 10px;
`

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: ''
    }
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <StyledForm
        onSubmit={event => {
          event.preventDefault()
          this.props.addTask(this.state.inputText)
        }}
      >
        <InputText
          type="text"
          placeholder="Your task here"
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <InputSubmit type="submit" value="Add" />
      </StyledForm>
    )
  }
}

export default Form
