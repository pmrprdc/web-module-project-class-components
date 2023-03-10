import React from 'react'

export default class App extends React.Component {
  

  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <p>Walk the dog</p>
        <p>Learn React</p>
        <p>Have Fun</p>
        <div>
        <label>
        <input type="text" ></input>

        </label>
        <button>Submit</button>
        

        </div>
        <button>Hide Completed</button>
      </div>
    )
  }
}
