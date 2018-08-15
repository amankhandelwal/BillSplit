import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Events from './Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Events />, document.getElementById('root'));
registerServiceWorker();
