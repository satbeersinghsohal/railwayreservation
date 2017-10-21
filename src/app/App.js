import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../views/home';
import About from '../views/login';
import Login from '../views/login';
import Admin from '../views/admin';

const routes = () => (
  <Router>
    <div>
        
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route path="/admin" component={Admin}/>
    </div>
  </Router>
)
export default routes;