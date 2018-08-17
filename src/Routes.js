import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import App from './App';
import Login from './Login';
import Register from './Register';
import Transaction from './Transaction';
import Dashboard from './Dashboard';
import FourOhFour from './FourOhFour';

export default class Routes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header>BillSplit</Header>
				<Switch>
					<Route exact path="/" component={props => <App />} />
					<Route
						exact
						path="/login"
						component={props => (
							<App>
								<Login />
							</App>
						)}
					/>
					<Route
						exact
						path="/register"
						component={props => (
							<App>
								<Register />
							</App>
						)}
					/>
					<Route exact path="/transactions" component={Transaction} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route component={FourOhFour} />
				</Switch>
			</div>
		);
	}
}
