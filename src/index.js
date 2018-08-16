import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Transaction from "./Transaction";
// import Dashboard from './Dashboard';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Transaction />, document.getElementById("root"));
registerServiceWorker();
