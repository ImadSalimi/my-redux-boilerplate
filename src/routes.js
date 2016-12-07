import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
	App,
	LoginContainer,
} from './containers';
import Home from './components/Home';

export default (store) => {
	const requireLogin = (nextState, replace, cb) => {
		function checkAuth() {
			const { auth: { user }} = store.getState();
			if (!user) {
				replace('/login');
			}
			cb();
		}

		checkAuth();
	}

	return (
		<Route path="/" component={App}>
			{ /* Home (main) route */ }
			<IndexRoute component={Home} />

			{ /* Routes requiring login */ }
			<Route onEnter={requireLogin}>
				<Route path="secret" component={Home} />
			</Route>

			{ /* Routes */ }
			<Route path="login">
				<IndexRoute component={LoginContainer} />
				<Route path="forgot" component={Home} />
			</Route>

			{ /* Catch all route */ }
		</Route>
	)
}