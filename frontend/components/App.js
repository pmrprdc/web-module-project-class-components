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

      handleAdd = (task)=> {
        // setState
        // change todos
        //make copy of todos
        //add todo to the end
        

        const newItem = {
          name: task,
          id: Date.now(),
          completed: false
        }
        this.setState({
          ...this.state,
          items: [...this.state.items, newItem]
        })


   }
  
   
    handleToggle = (id) => {
      
        //set state
        //change todos
        // find the todo we clicke don 
        // flip the value of completed for that todo
        // keep all other todos the same
        this.setState({
          ...this.state,
          items: this.state.items.map(item=>{
            if (item.id === id){
              return {...item, completed: !item.completed }
            } else {
              return item;
            }
          }) 
          
        })
       

    }
 

  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <ToDoList handleToggle={this.handleToggle} items = {this.state.items} />
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.addItem}>Hide Completed</button>
      </div>
    )
  }
}
