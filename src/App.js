import React, { Component } from 'react'
import { Link } from 'react-router'

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
