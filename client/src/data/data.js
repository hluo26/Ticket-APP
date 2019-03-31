import React, { Component } from 'react';
import { Form } from 'react-form';

class data extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: null,
      password: null
    };
    this.changeUserName = this.changeUserName.bind(this);
    this.changePassWord = this.changePassWord.bind(this);
  }

  changeUserName(event){
    const name = event.target;
    this.setState({
      username: name.value
    });
  }

  changePassWord(event){
    const password = event.target;
    this.setState({
      password: password.value
    });
  }

  render(){
    return (
      <div>
      <form>
        <h3>User Information</h3>
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>
        <label>Username</label>
        <input
          name = "username"
          type = "text"
          value = {this.state.username}
          onChange = {this.changeUserName}
        />
        <br />
        <label>Password</label>
        <input
          name = "password"
          type = "text"
          value = {this.state.password}
          onChange = {this.changePassWord}
        />
        <br />
      </form>
      </div>
    )
  }
}

export default data;
