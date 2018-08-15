import React from 'react';

export default class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			members:[],
			events:[]
		}
		this.eventAsPerId=this.eventAsPerId.bind(this);
	}

	componentWillMount(){
		fetch('http://localhost:8080/members')
		.then((response)=>(response.json()))
		.then((data)=>{this.setState({'members':data})})

		fetch('http://localhost:8080/events')
		.then((response)=>(response.json()))
		.then((data)=>{this.setState({'events':data})})

	}

	eventAsPerId(event){
		return this.state.events.find((items)=>{
			return items.id==event;
		})
	}

	render() {
		const members=this.state.members;
		//const member=members[0];
		if (members.length==0 || this.state.events.length==0)
			return (<div>sexy</div>);
		const member = members[0];
		const eventList = member.events;
		const myEvents = eventList.map(this.eventAsPerId)
		console.log(myEvents);
		const allMyEvents = myEvents.map((items)=>(<p>{items.title}</p>))

		return (
			<div>
			{allMyEvents}
			</div>
		);
	}
}
