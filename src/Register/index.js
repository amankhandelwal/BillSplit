import React from "react";
import firebase from "../firebase";
import Input from "../CustomInput";
import "./Register.css";

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			confirmPassword: ""
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
		firebase
			.auth()
			.createUserWithEmailAndPassword(
				this.state.email,
				this.state.password
			)
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// ...
			});
	}

	render() {
		return (
			<div className="register-box">
				<div className="register-container">
					<div className="register-title">
						<h3>Register</h3>
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
						<button
							id="submit"
							className="register-submit"
							onClick={this.handleRegisterClick()}
						>
							Register
						</button>
					</div>
				</div>
			</div>
		);
	}
}
