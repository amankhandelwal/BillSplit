import React from 'react';
import './Card.css';

//This is a Higher Order Component
const Card = children => <div className="card">{children}</div>;

export default Card;
