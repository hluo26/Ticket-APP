import React, { Component } from 'react';
import { Form } from 'react-form';

class LoginPage extends Component{
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

  handleSubmit(event){
    alert('saved');
  }

  render(){
    return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <div className="card" >
                  <div className="card-header">
                     <h3>User Information</h3>
                  </div>
                  <div className="card-body text-left">
                     <form onSubmit={this.handleSubmit}>
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
                        <input type="submit" value="Submit" class="btn btn-primary" />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
  }
}

export default LoginPage;
