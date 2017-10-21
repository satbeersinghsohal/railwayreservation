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
      http.getproducts(email,password).then(data => {
          self.setState({users: data});
          self.setState({isloggin:true});
          console.log(self.state.users)
        }, err => {
          self.setState({isloggin:false});
      });
      
    }
    
    submitticket= () => {
        var pname    =  this.state.pname;
        var useremail = this.state.email;
        var pfrom =  this.state.pfrom;
        var pto =  this.state.pto;
        var title = 'train'+this.state.trainno; 
        var pbalance= this.state.users[0].balance;
        console.log(title);
        if(this.state.trainno==1){
            console.log("itisone");
            pbalance -= 40;
        }else if(this.state.trainno==2){
            console.log("itistwo");
            pbalance -= 60;
        }else {
            console.log("itisthree");
            pbalance -= 80;
        }
        console.log("for balance",pbalance);
        
        var self = this;
        http.bookticket(useremail,pname,pfrom,pto,pbalance,title).then(data => {
          console.log(data);
          self.state = {isbooked:true};
          
        }, err => {
      });
       this.loadData();
    }
    
    productlist = () => {
        console.log(this.state);
        var self = this;
        const list = this.state.users.map(product =>
            <div className = "row" key= {product._id}>
                <div className="col-sm-5 productsimg">
                  <Profile name= {product.name} email = {product.email} balance={product.balance} ></Profile>
                </div>
                <div className="col-sm-7">
                  <Ticket email = {product.email} pname={product.passengername} title={product.title} pfrom= {product.from} pto={product.to} isbooked={self.state.isbooked}></Ticket>
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
                            <div className="col-8">
                                <div>
                                    {this.productlist()}
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card cardbackground">
                                <div className="card-body cardbody">
                                <form className = "formbody">
                                        <div class="form-group paddingspace">
                                            <label for="exampleInputEmail1">Passenger Name</label>
                                            <input type="text" value={this.state.pname} onChange={this. passengernamehandleChange.bind(this)} class="form-control" placeholder="Enter Passenger Name"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">from</label>
                                            <input type="text" value={this.state.pfrom} onChange={this.fromhandleChange.bind(this)} class="form-control" placeholder="From"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">to</label>
                                            <input type="text" value={this.state.pto} onChange={this.tohandleChange.bind(this)} class="form-control" placeholder="To"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputState" class="col-form-label">Trains</label>
                                            <select id="inputState" value={this.state.trainno} onChange={this.trainselecthandleChange.bind(this)} class="form-control">
                                                <option selected >Choose</option>
                                                <option value="1">Train1</option>
                                                <option value="2">Train2</option>
                                                <option value="3">Train3</option>
                                            </select>
                                        </div>
                                </form>
                                    <button onClick = {() => this.submitticket()} class="btn btn-primary btn-md" >Book Ticket</button>
                                </div>
                                </div>
                            </div>
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