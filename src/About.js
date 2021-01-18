import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class About extends Component{


    logout(){
        this.props.history.push("/logout");
    }
    render(){
        let firstname=localStorage.getItem('firstname');
        let lastname=localStorage.getItem('lastname');
        let email=localStorage.getItem('email');
        let nascimento=localStorage.getItem('nascimento');
        let cpf=localStorage.getItem('cpf');
        let cep=localStorage.getItem('cep');
        let endereco=localStorage.getItem('endereco');
        let numero=localStorage.getItem('numero');
        let password=localStorage.getItem('password');
        
        return(
            <div>
            <div className="menustyle">
                <nav className="navbar navbar-expand-lg navbar-light">
                   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link navcolor" to="/Home">Registrar Tarefa<span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navcolor" to="/About">Informações</Link>
                            </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            <button type="button" class="btn btn-danger"onClick={this.logout.bind(this)}>LogOut</button>
                            </form>
                    </div>
                </nav>
            </div>
            <h1>{firstname}{lastname}</h1>
            <h1>Email:{email}</h1>
            <h1>Nascimento:{nascimento}</h1>
            <h1>CPF:{cpf}</h1>
            <h1>CEP:{cep}</h1>
            <h1>{endereco},{numero}</h1>
            </div>
            
        );
    }
}