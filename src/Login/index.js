import React from 'react';
import firebase from '../firebase';
import Input from '../CustomInput';
import './Login.css';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			token: '',
			username: '',
			photoURL: ''
		};
		this.handleGoogleSignIn = this.handleGoogleSignIn.bind(this);
		this.handleEmailSignIn = this.handleEmailSignIn.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleTextChange = event => {
		// event.preventDefault();
		let value = event.target.value;
		let name = event.target.name;
		this.setState({
			[name]: value
		});
	};

	handleEmailSignIn() {
		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log('Aww Snap !!');
				// ...
			});
	}

	handleGoogleSignIn() {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = result.credential.accessToken;
				// The signed-in user info.
				var user = result.user;

				this.setState({
					token,
					username: user.displayName,
					photoURL: user.photoURL
				});
			})
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
				console.log('Aww snap');
			});
	}

	render() {
		return (
			<div className="login-box">
				<div className="login-container">
					<div className="login-title">
						<h3>Login</h3>
					</div>
					<div className="login-form">
						<Input
							className="login-form-field"
							label="Email"
							name="email"
							placeholder="Email..."
							onChange={this.handleTextChange}
							value={this.state.email}
							type="text"
						/>
						<Input
							className="login-form-field"
							label="Password"
							name="password"
							placeholder="Password..."
							onChange={this.handleTextChange}
							value={this.state.password}
							type="password"
						/>
					</div>
					<button id="submit" className="login-submit" onClick={() => this.handleEmailSignIn()}>
						Submit
					</button>

					<button className="login-submit" onClick={() => this.handleGoogleSignIn()}>
						Google Sign-In
					</button>
					<LoginOptions />
				</div>
			</div>
		);
	}
}

const LoginOptions = props => {
	return (
		<div className="login-options">
			<p>Forgot Password?</p>
			<a href="/login" className="plainLink">
				<p>Register with Email ID</p>
			</a>
		</div>
	);
};
