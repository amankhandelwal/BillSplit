import React from 'react';
import logo from './logo.png';
import './Header.css';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">{this.props.children}</h1>
			</div>
		);
	}
}
