import React from 'react';
import logo from './logo.png';
import './Header.css';

export default class Header extends React.Component {
	render() {
		return (
			<div className="App-header">
					<a className="plainLink App-logo-link" href="/"><img src={logo} className="App-logo" alt="logo" />
					</a>
				<a className="plainLink" href="/">
					<h1 className="App-title">{this.props.children}</h1>
				</a>
			</div>
		);
	}
}
