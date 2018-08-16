/*import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
*/

var firebase = require("firebase");

var config = {
	apiKey: "AIzaSyBwAhYFRQqGpPTLecyMKRTH7_PobgRtbgk",
	authDomain: "billsplit-3e936.firebaseapp.com",
	databaseURL: "https://billsplit-3e936.firebaseio.com",
	projectId: "billsplit-3e936",
	storageBucket: "billsplit-3e936.appspot.com",
	messagingSenderId: "996310645901"
};
firebase.initializeApp(config);

var database = firebase.database();
function writeUserData() {
	firebase
		.database()
		.ref("events")
		.set({
			asdfa2b3c3a: {
				title: "Trip to abc",
				id: "asdfa2b3c3a",
				members: ["1a2b3c3a", "dsafjj251", "bahds0614"],
				transactions: {
					asdfa2b3c3a: {
						title: "Cab fare",
						id: "asdfa2b3c3a",
						amount: "500",
						between: ["1a2b3c3a", "dsafjj251", "bahds0614"],
						paidBy: "1a2b3c3a"
					},
					"23ewi": {
						title: "Cab fare",
						id: "23ewi",
						amount: "200",
						between: ["1a2b3c3a", "dsafjj251", "bahds0614"],
						paidBy: "1a2b3c3a"
					}
				}
			},
			"23ewi": {
				title: "Xyz bday",
				id: "23ewi",
				members: ["1a2b3c3a", "dsafjj251", "bahds0614"],
				transactions: {
					asdfa2b3c3a: {
						title: "Cake",
						id: "asdfa2b3c3a",
						amount: "500",
						between: ["1a2b3c3a", "dsafjj251", "bahds0614"],
						paidBy: "1a2b3c3a"
					},
					"23ewi": {
						title: "props",
						id: "23ewi",
						amount: "200",
						between: ["1a2b3c3a", "dsafjj251", "bahds0614"],
						paidBy: "1a2b3c3a"
					}
				}
			},
			"3ryewi": {
				title: "Trip to abc",
				id: "3ryewi",
				members: ["1a2b3c3a", "dsafjj251", "bahds0614"],
				transactions: {
					asdfa2b3c3a: {
						title: "Cab fare",
						id: "asdfa2b3c3a",
						amount: "500",
						between: ["1a2b3c3a", "dsafjj251", "bahds0614"],
						paidBy: "1a2b3c3a"
					},
					"23ewi": {
						title: "Cab fare",
						id: "23ewi",
						amount: "200",
						between: ["1a2b3c3a", "dsafjj251", "bahds0614"],
						paidBy: "1a2b3c3a"
					}
				}
			},
			afd4sdg: {
				title: "Xyz bday",
				id: "afd4sdg",
				members: ["1a2b3c3a", "dsafjj251", "bahds0614"],
				transactions: {
					asdfa2b3c3a: {
						title: "Cake",
						id: "asdfa2b3c3a",
						amount: "500",
						between: ["1a2b3c3a", "dsafjj251", "bahds0614"],
						paidBy: "1a2b3c3a"
					},
					"23ewi": {
						title: "props",
						id: "23ewi",
						amount: "200",
						between: ["1a2b3c3a", "dsafjj251", "bahds0614"],
						paidBy: "1a2b3c3a"
					}
				}
			}
		});
	/*.push({
			title: 'Trip to abc',
			id: 1,
			members: [123232, 1231323, 123124],
			transactions: ''
		});*/
}
writeUserData();

// export default firebase;
