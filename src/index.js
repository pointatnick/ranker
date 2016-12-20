import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Contact from './Contact';
import Room from './Room';
import Login from './Login'; 
import Ranking from './Ranking';
import './index.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  		<Route path="ranking" component={Ranking}></Route>
  		<Route path="login" component={Login}></Route>
  		<Route path="room" component={Room}></Route>
  		<Route path="about" component={About}></Route>
  		<Route path="contact" component={Contact}></Route>
  	</Route>
  </Router>,
  document.getElementById('root')
);
