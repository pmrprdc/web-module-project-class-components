import React from 'react'

export default class Form extends React.Component {
  constructor(props){
    super(props)
   
    
  }
     
  render() {
    return (
      <div>
        <label>
        <input type="text" ></input>
        </label>
        <button onClick={()=>this.props.handleAdd()}>Submit</button>
        <br></br>
      </div>
    )
  }
}
