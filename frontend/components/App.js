import React from 'react'
import ToDoList from "./TodoList"
import Form from "./Form"

const initialItems = [  {
  name: 'Organize Garage',
  id: 1528817077286, // could look different, you could use a timestamp to generate it
  completed: false
},
{
  name: 'Bake Cookies',
  id: 1528817084358,
  completed: false
},

]


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items: initialItems
  }
      }

      handleAdd = ()=> {
        // setState
        // change todos
        //make copy of todos
        //add todo to the end
        console.log("hellos")

        const newItem = {
          name: 'Bake Cakes',
          id: 1528817084358,
          completed: false
        }
        this.setState({
          ...this.state,
          items: [...this.state.items, newItem]
        })





      }
      
 

  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <ToDoList items = {this.state.items} />
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.addItem}>Hide Completed</button>
      </div>
    )
  }
}
