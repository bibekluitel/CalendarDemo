import React, { Component } from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Container/Dashboard.js';
import store from './store/store.js';

export default class App extends Component {
	render() {
		return (
			<Provider store = {store} >
				<Router>
					<Switch>
						<Route path = {`/:displayMode/:year/:month/:day`} component = {Dashboard} />
						<Route path = {`/:displayMode/:year/:month`} component = {Dashboard} />
						<Route path = {`/:displayMode/:year`} component = {Dashboard} />
						<Route path = {`/:displayMode`} component = {Dashboard} />
						<Route path = '/' component = {Dashboard} />
					</Switch>
				</Router>
			</Provider>

			);
	}
}

render (<App/> , document.getElementById('app'));
