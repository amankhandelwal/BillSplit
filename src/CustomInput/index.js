import React from 'react';
import './CustomInput.css';

export default class CustomInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="input-container">
				<p className="input-label">{this.props.label}:</p>
				<input className={'input-field ' + this.props.className} type="text" style={this.props.style} />
			</div>
		);
	}
}
