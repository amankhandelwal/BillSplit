import React from 'react';
import './fourohfour.css';

const FourohFour = props => {
	return (
		<div className="container404">
			<p className="title404">Aww Snap</p>
			<p className="emoji404">🤕</p>
			<p className="subtitle404">You seem to have come to an invalid URL or a broken link</p>
			<p className="suggestion404">
				You might wanna go back to our <br />
				<a href="/">Home Screen</a>
			</p>
		</div>
	);
};

export default FourohFour;
