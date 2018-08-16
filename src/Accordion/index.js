import React from "react";
import "./Accordion.css";

export default class Accordion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	toggleAccordian = event => {
		this.setState({ visible: !this.state.visible });
	};

	render() {
		let stuff = this.props.children;

		return (
			<div className="accordian-container">
				<a className="accordion-icon" onClick={this.toggleAccordian}>
					<i class="fas fa-chevron-down" />
				</a>
				<div
					className={
						this.state.visible
							? "accordion-panel visibl"
							: "accordion-panel invisibl"
					}
				>
					{stuff}
				</div>
			</div>
		);
	}
}
