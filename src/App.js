import React, { Component } from 'react'
import Room from './Room'
import Login from './Login'
import {Link} from 'react-router'
import Ranking from './Ranking'

class App extends Component {
  render() {
    return (<div>
    	<h1>Welcome To Ranker</h1>

    	<ul>
    		<Link to="ranking"><li>Ranking</li></Link>
    		<Link to="about"><li>About</li></Link>
    		<Link to="contact"><li>Contact</li></Link>
    		<Link to="room"><li>Room</li></Link>
    	</ul>
    	{this.props.children}
    	</div>
    	)
  }
}

export default App
