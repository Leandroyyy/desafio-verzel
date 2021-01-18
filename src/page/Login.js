import React,{Component} from 'react';
import '../App.css';
import '../index.css';
import {Link} from 'react-router-dom';
export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            err:''
        }
    }
    login(e){
        e.preventDefault();
        let email=e.target.elements.email.value;
        let password=e.target.elements.password.value;
        if(email===localStorage.getItem('email') && password===localStorage.getItem('password')){
            this.props.history.push('/menu');
        }
        else{
            this.setState({
                err:'Invalid'
            });
        }
    }
    signup(){
        this.props.history.push('/signup');
    }
    signin(){
        this.props.history.push('/');
    }
  render(){
    return(
        <div className="bodycolor">
            <div className="formstyle">
            <div className="container signupin">
                <div className="row">
                    <button type="submit" class="btn btn-primary signup"onClick={this.signup.bind(this)}>Sign Up</button>
                    <button type="submit" class="btn btn-primary signin"onClick={this.signin.bind(this)}>Sign In</button>
                </div>
                <span className="invalid">{this.state.err!==''?this.state.err:''}</span>
                <form method="post" onSubmit={this.login.bind(this)}>
                    <h3 className="text-white text-center m-3">Bem-Vindo!</h3>
                    <div class="form-group text-white">
                    <label for="username">Email*</label>
                    <input type="text" class="form-control bg-dark" id="email" aria-describedby="emailHelp" placeholder="Email*" required></input>
                    {/* <small id="emailHelp" class="form-text text-muted text-white">Type UserName pathakaman.</small> */}
                    </div>
                    <div class="form-group text-white">
                    <label for="password">Password*</label>
                    <input type="password" class="form-control bg-dark" id="password"placeholder="Password*" required></input>
                    {/* <small id="userHelp" class="form-text text-muted text-white">Type password aman123</small> */}
                    </div>
                    <button type="submit" class="btn btn-primary loginbutton mt-4">Log in</button>
                </form>
            </div>
            </div>
        </div>
    );
  }
}