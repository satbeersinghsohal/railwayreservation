import React, {Component} from 'react';
import './home.css'
import imgurl from '../images/first.jpg'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {browserHistory} from 'react-router';
import httpservice from '../service/http-service';
const http = new httpservice;

class home extends Component{
    constructor(props){
        super(props);
        this.state = {users:[]};
    }
    submitfrom = () => {
        var name = this.state.name;
        var email    =  this.state.email;
        var password =  this.state.password;
        var self = this;
         http.register(email,password).then(data => {
             if(data == "email already taken"){
                 alert(data);
             }else{
                 
          self.setState({users: data});
          console.log(self.state.users)
                 this.props.history.push("/login");
             }
        }, err => {
          
      });
      
    }
    
    namehandleChange(event) {
        event.preventDefault();
        this.setState({name: event.target.value})
    }
    emailhandleChange(event) {
        event.preventDefault();
        this.setState({email: event.target.value})
    }
    passwordhandleChange(event) {
        event.preventDefault();
        this.setState({password: event.target.value})
    }
    
    render(){
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
            <section className='backgroundcolor'>
                <div className= 'row'>
                    <div className='col-sm-8'>
                        <h1 className= "display-3 headingtitle">Welcome</h1>
                    <div>
                        <img className = "img-fluid img" src = {imgurl} ></img> 
                    </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className='container-fluid'>
                            <div className='cardbody'>
                                <div className="formgroup formbody">
                                <form >
                                    <div className="form-group">
                                        <h3>Register</h3>
                                    </div>
                                    <div className="form-group">
                                        <label >Name</label>
                                        <input type="text" className="form-control" value={this.state.name} onChange={this.namehandleChange.bind(this)} placeholder="Enter Name"/>
                                            
                                    </div>
                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" className="form-control" value={this.state.email} onChange={this.emailhandleChange.bind(this)} placeholder="Enter email"/>
                                            
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" className="form-control" value={this.state.password} onChange={this.passwordhandleChange.bind(this)} placeholder="Password"/>
                                    </div>
                                     <div className="form-group">
                                        <label >Conform Password</label>
                                        <input type="password" className="form-control" placeholder="Confirm Password"/>
                                    </div>   
                                </form>
                                    <button onClick = {() => this.submitfrom()} type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                    </div>  
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default home;