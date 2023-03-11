import React from 'react'
import ToDo from './Todo'

export default class TodoList extends React.Component {
  constructor(props){
    super(props)
  }

  

  render() {
    
    return (
      <div>
        {this.props.items.map(item=>{
         return <ToDo item={item}/>
         
        })}

      </div>
    )
  }
}
