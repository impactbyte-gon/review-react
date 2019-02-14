import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: red;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 2px 5px;
  font-size: 8px;
  margin-left: 5px;
`

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <Button
                onClick={() => {
                  this.props.deleteTask(index)
                }}
              >
                DELETE
              </Button>
              <Button
                onClick={() => {
                  this.props.editTask(index)
                }}
              >
                EDIT
              </Button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default List
