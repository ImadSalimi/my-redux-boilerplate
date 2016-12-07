import React from 'react';
import ReactDOM from 'react-dom';
import ApiClient from './helpers/ApiClient';
import createStore from './redux/create';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import getRoutes from './routes';

const client = new ApiClient();
const dest = document.getElementById('root');
const store = createStore(browserHistory, client);
const history = syncHistoryWithStore(browserHistory, store);

const component = (
	<Router history={history}>
		{getRoutes(store)}
	</Router>
)

ReactDOM.render(
	<Provider store={store} key="provider">
		{component}
	</Provider>,
	dest
);
