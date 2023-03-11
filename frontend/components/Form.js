import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super()
   
    this.state = {
        input: ""

    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.handleAdd(this.state.input)
    this.setState({
      input: ""
    })
      
    
  }

  handleChange = (e) => {
  
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }
     
  render() {
    
    return (
      <div>
        <label>
        <input value={this.state.input} onChange={this.handleChange} type="text" ></input>
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
        <br></br>
      </div>
    )
  }
}
