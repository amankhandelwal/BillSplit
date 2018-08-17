import React from 'react';
import firebase from '../firebase';
import Input from '../CustomInput';
import './Register.css';

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
			error: ''
		};
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleTextChange = event => {
		let value = event.target.value;
		let name = event.target.name;
		this.setState({
			[name]: value
		});
	};

	handleRegisterClick() {
		let error = '';
		if (!this.state.email) error = 'Please enter an Email ID';
		else if (!this.state.password) error = 'Please enter a Password';
		else if (!this.state.confirmPassword) error = 'Please Confirm the Password';
		else if (this.state.confirmPassword !== this.state.password) error = 'Passwords do not match';
		else {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.state.email, this.state.password)
				.catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// ...
				});
		}
		this.setState({ error });
	}

	render() {
		return (
			<div className="register-box">
				<div className="register-container">
					<div className="register-title">
						<h3>Register</h3>
						<p className="error">{this.state.error}</p>
					</div>
					<div className="register-form">
						<Input
							className="register-form-field"
							label="Email"
							name="email"
							placeholder="Email..."
							onChange={this.handleTextChange}
							value={this.state.email}
							type="text"
						/>
						<Input
							className="register-form-field"
							label="Password"
							name="password"
							placeholder="Password"
							onChange={this.handleTextChange}
							value={this.state.password}
							type="password"
						/>
						<Input
							className="register-form-field"
							label="Confirm Password"
							name="confirmPassword"
							placeholder="Re-enter Password..."
							onChange={this.handleTextChange}
							value={this.state.confirmPassword}
							type="password"
						/>
						<div className="spacer" />
						<button
							id="submit"
							className="register-submit"
							onClick={() => {
								this.handleRegisterClick();
							}}
						>
							Register
						</button>
						<RegisterOptions />
					</div>
				</div>
			</div>
		);
	}
}

const RegisterOptions = props => {
	return (
		<div className="login-options">
			<a href="/login" className="plainLink">
				<p>Go to Login</p>
			</a>
		</div>
	);
};
