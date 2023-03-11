import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super()
   
    this.state = {
        input: ""

    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.handleAdd(this.state.input)
    this.setState({
      input: ""
    })
      
    
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      input: e.target.value
    })

    
  }

  


  handleKeyDown(e){
    e.preventDefault();
    if(e.key === "Enter"){
        console.log ("pressed enter")
      
    }
 }



  
     
  render() {
    
    return (
      <form onKeyPress={(e)=>this.handleSubmit}>
        <label>
        <input value={this.state.input} onChange={this.handleChange} type="text" ></input>
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
        <br></br>
      </form>
    )
  }
}
