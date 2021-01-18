import React,{Component} from 'react';
import '../App.css';
import '../index.css';
import {Link} from 'react-router-dom';
export default class Sign_up extends Component{
    constructor(props){
        super(props);
        this.state={
            err:''
        }
    }
    sign_up(e){
        e.preventDefault();
        let firstname=localStorage.setItem('firstname',e.target.elements.firstname.value);
        let lastname=localStorage.setItem('lastname',e.target.elements.lastname.value);
        let email=localStorage.setItem('email',e.target.elements.email.value);
        let nascimento=localStorage.setItem('nascimento',e.target.elements.nascimento.value);
        let cpf=localStorage.setItem('cpf',e.target.elements.cpf.value);
        let cep=localStorage.setItem('cep',e.target.elements.cep.value);
        let endereco=localStorage.setItem('endereco',e.target.elements.endereco.value);
        let numero=localStorage.setItem('numero',e.target.elements.numero.value);
        let password=localStorage.setItem('password',e.target.elements.password.value);
        // let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        // if(email===email.match(mailformat) && password.length>=6){
            if((firstname===firstname && nascimento===nascimento) && (email===email && password===password)){
                this.props.history.push('/');    
            }
            else{
                this.setState({
                    err:'Invalid'
                });
            }
        // }
        // else{
        //     alert("Enter Valid Email And Password")
        // }

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
                <form method="post" onSubmit={this.sign_up.bind(this)}>
                    <h3 className="text-white text-center m-3">Cadastrar-se</h3>
                    <div class="form-group text-white mt-4">
                        <div className="row">
                            <div className="col-6">
                            <input type="text" class="form-control bg-dark" id="firstname" aria-describedby="userHelp" placeholder="Nome" required></input>
                            </div>
                            <div className="col-6">
                            <input type="text" class="form-control bg-dark" id="lastname" aria-describedby="userHelp" placeholder="Sobrenome*" required></input>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col">
                            <input type="text" class="form-control bg-dark mt-4" id="email" aria-describedby="userHelp" placeholder="Email" required></input>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col">
                            <input type="date" class="form-control bg-dark mt-4" max='2010/01/01' id="nascimento" aria-describedby="userHelp" placeholder="Nascimento" required></input>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col">
                            <input type="text" class="form-control bg-dark mt-4" maxLength='14' id="cpf" aria-describedby="userHelp" placeholder="CPF"></input>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col">
                            <input type="text" class="form-control bg-dark mt-4" id="cep" aria-describedby="userHelp" placeholder="CEP"></input>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col">
                            <input type="text" class="form-control bg-dark mt-4" id="endereco" aria-describedby="userHelp" placeholder="Endereço"></input>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col">
                            <input type="text" class="form-control bg-dark mt-4" id="numero" aria-describedby="userHelp" placeholder="Numero"></input>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col">
                            <input type="password" class="form-control bg-dark mt-4" id="password"placeholder="Set a Password*"required></input>                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary signupbutton">Sign Up</button>
                </form>
            </div>
            </div>
        </div>
    );
  }
}
