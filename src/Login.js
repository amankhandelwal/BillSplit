import React from 'react';
import Input from './CustomInput.js';
import './Login.css';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="login-container">
				<div className="login-title">
					<h3>Login</h3>
				</div>
				<div className="login-form">
					<Input className="login-form-field" label="login" />
					<Input className="login-form-field" label="password" />
				</div>
				<button className="login-submit">Submit</button>
				<div className="login-options">
					<p>Forgot Password?</p>
					<p>Register</p>
				</div>
			</div>
		);
	}
}
