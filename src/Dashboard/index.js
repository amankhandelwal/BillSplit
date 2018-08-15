import React from "react";
import Card from "../Card";
import Header from "../Header";
import "./Dashboard.css";

export default class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			members: [],
			events: []
		};
		this.eventAsPerId = this.eventAsPerId.bind(this);
	}

	componentWillMount() {
		fetch("http://localhost:8080/members")
			.then(response => response.json())
			.then(data => {
				this.setState({ members: data });
			})
			.catch(err => {
				console.log("Aww Snap");
			});

		fetch("http://localhost:8080/events")
			.then(response => response.json())
			.then(data => {
				this.setState({ events: data });
			})
			.catch(err => {
				console.log("Aww Snap");
			});
	}

	eventAsPerId(event) {
		return this.state.events.find(items => {
			return items.id == event;
		});
	}

	render() {
		const members = this.state.members;
		//const member=members[0];
		let allMyEvents = <div />;
		if (members.length != 0 && this.state.events.length != 0) {
			const member = members[0];
			const eventList = member.events;
			const myEvents = eventList.map(this.eventAsPerId);
			// console.log(myEvents);
			allMyEvents = myEvents.map(items => <EventCard>{items}</EventCard>);
		}

		return (
			<div className="App">
				<Header>Events</Header>
				<div className="dashboard-container">{allMyEvents}</div>
			</div>
		);
	}
}

const EventCard = props => {
	const items = props.children;
	return Card(
		<div className="event-item">
			<h3>{items.title}</h3>
		</div>
	);
};
