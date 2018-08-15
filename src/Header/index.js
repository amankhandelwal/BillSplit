import React from 'react';
import logo from './logo.png';
import './Header.css';

export default class Header extends React.Component {
	render() {
		return (
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Bill Split</h1>
			</div>
		);
	}
}
