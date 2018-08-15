import React from 'react';

export default class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			members: [],
			events:[]
		}
		this.renderEvents = this.renderEvents.bind(this);
	}
componentDidMount(){
		console.log('Component did mount');
}

shouldComponentUpdate(){
		console.log('should component update');
		return true;

}

componentWillUpdate(nextProps, nextState){
		console.log('Component will update');

}

componentDidUpdate(prevProps, prevState){
		console.log('Component did update');
}



	componentWillMount(){
		console.log('Component will mount');
		fetch('http://localhost:8080/members')
		.then((response)=>(response.json()))
		.then((data)=>{console.log('Members aaya');this.setState({'members':data})})

		fetch('http://localhost:8080/events')
		.then((response)=>(response.json()))
		.then((data)=>{console.log('Events aaya');this.setState({'events':data})})
	}

	renderEvents(event){
			return this.state.events.find((item)=>{
				return item.id==event
			})
	}

	render() {
		console.log('render');
		const members=this.state.members;
		if(members.length==0 || this.state.events.length==0)
			return (<div>Nothing</div>);

		const member=members[0];
		const myEventsList=member.events;  // [1,2,3]
		const myEvents = myEventsList.map(this.renderEvents) // [{},{},{}]

		return (
			<div>
			{myEvents[0].title}
			</div>
		);
	}
}
