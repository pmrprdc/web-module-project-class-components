import React from 'react'


const initialItems = [  {
  name: 'Organize Garage',
  id: 1528817077286, // could look different, you could use a timestamp to generate it
  completed: false
},
{
  name: 'Bake Cookies',
  id: 1528817084358,
  completed: false
}
]


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items: initialItems
  }
      }

    addItem =(e, item)=>{
      e.preventDefault();
      const newItem = {
        name: item,
        id: Date.now(),
        completed: false
      }
    this.setState({...this.state.items, items: [...this.state.items, newItem]})
    }

  render() {
    return (
      <div>
        <h1>Todos:</h1>
        
        <div>
        <label>
        <input type="text" ></input>

        </label>
        <button onClick={this.addItem}>Submit</button>
        </div>
        <button>Hide Completed</button>
      </div>
    )
  }
}
