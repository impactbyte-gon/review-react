import React from 'react'

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <button
                onClick={() => {
                  this.props.deleteTask(index)
                }}
              >
                DELETE
              </button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default List
