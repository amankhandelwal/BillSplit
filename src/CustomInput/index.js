import React from 'react';
import './CustomInput.css';

export default class CustomInput extends React.Component {
	render() {
		return (
			<div className="input-container">
				<p className="input-label">{this.props.label}:</p>
				<input
					className={'input-field ' + this.props.className}
					type="text"
					style={this.props.style}
					name={this.props.label}
					value={this.props.value}
					onChange={this.props.onChange}
					type={this.props.type}
				/>
			</div>
		);
	}
}
