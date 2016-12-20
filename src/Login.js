import React from 'react';
import './Login.css';
class Login extends React.Component {
	
	render() {
		return (
			<div>
				<div>Username</div>
				<input type="text"/>
				<div>Password</div>
				<input type="text"/> 
				<button>Login</button>
				<a href="http://google.com"><div>sign up</div></a>
			</div>
			)
	}

}

export default Login