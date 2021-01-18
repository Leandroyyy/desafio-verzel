import React,{Component} from 'react';
import './App.css';
import Login from './page/Login';
import Home from './page/Home';
import About from './About';

import Sign_up from './page/Sign_up';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Menu from './page/Menu';
export default class App extends Component{

  render(){
    return(
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Sign_up}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/logout" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>

        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}