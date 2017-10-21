import React, { Component } from 'react';
import request from 'request';
import './login.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Profile from './profile';
import Ticket from './ticketbook';
import httpservice from '../service/http-service';
const http = new httpservice;

class login extends Component {
    
    constructor(props){
        super(props);
        this.state = {users:[]};
        this.state = {isloggin:false};
        this.loadData = this.loadData.bind(this);
        this.productlist = this.productlist.bind(this);
    }
    loadData = () => {
        var email    =  this.state.email;
        var password =  this.state.password;
        var self = this;
      http.adminlogin(email,password).then(data => {
          self.setState({users: data});
          self.setState({isloggin:true});
          console.log(self.state.users)
        }, err => {
          self.setState({isloggin:false});
      });
      
    }
    
    submittrain= () => {
        var pname    =  this.state.pname;
        var useremail = this.state.email;
        var traindata = this.state.train;
        var self = this;
        http.addtrain(useremail,traindata).then(data => {
          console.log(data);
          self.state = {isbooked:true};
        }, err => {
      });
       this.loadData();
    }
    productlist = () => {
        console.log("skndfsfn",this.state);
        var self = this;
        
        const list = this.state.users.map(product =>
            <div className = "" key= {product._id}>
                <div className="productsimg">
                  <Profile name= {product.name} email = {product.email} balance="0" ></Profile>
                </div>
                <div>
                    
                </div>
            </div>
        );
    return (list);
   }
    
    handleChange(event) {
        event.preventDefault();
        this.setState({email: event.target.value})
    }
    phandleChange(event) {
        event.preventDefault();
        this.setState({password: event.target.value})
    }
    passengernamehandleChange(event) {
        event.preventDefault();
        this.setState({pname: event.target.value})
    }
    fromhandleChange(event) {
        event.preventDefault();
        this.setState({pfrom: event.target.value})
    }
    tohandleChange(event) {
        event.preventDefault();
        this.setState({pto: event.target.value})
    }
    trainselecthandleChange(event) {
        event.preventDefault();
        this.setState({trainno: event.target.value})
    }
    render(){
        const isLoggedIn = this.state.isloggin;
        if(isLoggedIn){
            return(
                    <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">Navbar</a>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <Link to='/' className="nav-link" >Home </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/Aboutus' className="nav-link" >About Us </Link>
                                        </li>
                                    </ul>
                            </div>
                            <div className = "col-1">
                                <div className="collapse navbar-collapse">
                                    <ul className="navbar-nav floatright">
                                        <li className="nav-item floatright">
                                            <Link to='/' className="btn btn-danger" >Log out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </nav>   
                        <div className="row pushdown">
                            {this.productlist()}
                        </div>
                    </div>     
        );
        }else{
        return(
         <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to='/' className="nav-link" >Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Aboutus' className="nav-link" >About Us </Link>
                                </li>
                            </ul>
                    </div>
                <div className = "col-1">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav floatright">
                            <li className="nav-item floatright">
                                <Link to='/Login' className="btn btn-primary" >Log in </Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>   
        <div className='base'>
                <div>
                    <div className='col-sm-4'>
                    </div>
                    <div className='col-sm-4 cardbox'>
                         <div className="card cardbackground">
                            <div className="card-body cardbody">
                                <form className = "formbody">
                                    <div class="form-group paddingspace">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" value={this.state.email} onChange={this.handleChange.bind(this)} class="form-control" placeholder="Enter email"/>
                                    </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" value={this.state.password} onChange={this.phandleChange.bind(this)} class="form-control" placeholder="Password"/>
                                                </div>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input"/>
                                                        Remember me
                                                </label>
                                            </div>
                                </form>
                                    <button onClick = {() => this.loadData()} class="btn btn-primary btn-md" >Log in</button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                    </div>
                </div>
          </div>  
        </div>  
        );
        }
    }
}

export default login;