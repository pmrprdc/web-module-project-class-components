import React from 'react'
import ToDo from './Todo'

export default class TodoList extends React.Component {
  constructor(){
    super()
  }

 


  render() {
    
    return (
      <div>
        {this.props.items.map(item=>{
         return <ToDo handleToggle={this.props.handleToggle} key={item.id} item={item}/>
         
        })}

      </div>
    )
  }
}
