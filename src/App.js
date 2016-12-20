import React, { Component } from 'react'
import Room from './Room'
import Login from './Login'
import {Link} from 'react-router'
import Ranking from './Ranking'

class App extends Component {
  render() {
    return (
      <div>
    	  <h1>Welcome To Ranker</h1>
    	  <Link to="ranking">Ranking</Link>
        {' · '}
    	  <Link to="about">About</Link>
        {' · '}
        <Link to="contact">Contact</Link>
        {' · '}
        <Link to="room">Room</Link>
    	  {this.props.children}
    	</div>
    	)
  }
}

export default App
