import React from "react";
import Card from "../Card";
import Header from "../Header";
import "./Transaction.css";
import Accordion from "../Accordion";

export default class Transaction extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			transactions: {
				asdfa2b3c3a: {
					title: "Cab fare",
					id: "asdfa2b3c3a",
					amount: "500",
					between: ["1a2b3c3a", "275dssdg", "4dsgdssdg"],
					paidBy: "1a2b3c3a"
				},
				"23ewi": {
					title: "Cab fare",
					id: "23ewi",
					amount: "200",
					between: ["1a2b3c3a", "275dssdg", "4dsgdssdg"],
					paidBy: "1a2b3c3a"
				}
			},
			eventId: "23ewi",
			membersId: [],
			members: {}
		};
		this.fetchMembers = this.fetchMembers.bind(this);
	}

	componentWillMount() {
		fetch("http://localhost:8080/members")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({ members: data, loading: false });
			})
			.catch(() => {
				console.log("Aww Snap !!");
			});
	}

	fetchMembers = id => {
		console.log("members", this.state.members);
		return this.state.members[id].name;
	};

	render() {
		let transactions = this.state.transactions;
		let transactionId = Object.keys(transactions);
		//const member=members[0];
		let allMyTransactions = <div />;
		if (this.state.loading == false && transactions.length != 0) {
			console.log("Aaaayaaaa");
			allMyTransactions = transactionId.map(id => {
				const transaction = transactions[id];
				transaction["between"] = transaction["between"].map(
					this.fetchMembers
				);
				console.log("Transaction betweeen", transaction.between);
				return <TransactionCard>{transaction}</TransactionCard>;
			});
		}

		return (
			<div className="App">
				<div className="dashboard-container">{allMyTransactions}</div>
			</div>
		);
	}
}

const TransactionCard = props => {
	const items = props.children;
	return Card(
		<div className="transaction-item">
			<h3>{items.title}</h3>
			<Accordion>
				<ul>
					{items.between.map(member => (
						<li>{member}</li>
					))}
				</ul>
			</Accordion>
		</div>
	);
};

