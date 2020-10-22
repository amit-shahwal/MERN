import './App.css';
import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    title: '',
  }

  handleChange = event => {
    this.setState({ tile: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    alert('button clicked'+this.state.title)
    var payload = this.state
    axios.post("http://localhost:5000/addTodo",payload )
    .then((dat)=>{
      console.log('status : '+dat.status)
    })
    .catch(()=>{console.log('couldnt have data from backend')})
 }
  componentDidMount(){
    axios.get("http://localhost:5000/todo")
    .then((dat)=>{
      
     console.log("here it is")
    })
    .catch(()=>{console.log('couldnt have data from backend')})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
    <h3>{this.state.title}</h3>
      </div>
    )
  }
}