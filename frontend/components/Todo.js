import React from 'react'

export default class Todo extends React.Component {
  constructor(){
    super();

  }


  handleClick = () => {
    this.props.handleToggle(this.props.item.id)
  }
  render() {
    return (
      <p onClick={this.handleClick}>
        {this.props.item.name} {this.props.item.completed && <span>DONE</span>}
      </p>
    )
  }
}
