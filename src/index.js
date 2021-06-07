import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'
import Messages from './Messages'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


ReactDOM.render((
  <Router>
  <div>
  <Navbar />
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/signup" component={Signup} />
  <Route exact path="/messages" component={Messages} />
  </div>
  </Router>),
  document.getElementById('root')
);
