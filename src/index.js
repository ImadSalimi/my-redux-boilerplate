import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from './config';
// import ApiClient from './helpers/ApiClient';

import createStore from './redux/create';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import getRoutes from './routes';

const client = axios.create({
	baseURL: config.apiHost + ':' + config.apiPort + '/api',
	responseType: 'json'
})
const store = createStore(browserHistory, client);
const history = syncHistoryWithStore(browserHistory, store);

const component = (
	<Router history={history}>
		{getRoutes(store)}
	</Router>
)

const dest = document.getElementById('root');
ReactDOM.render(
	<Provider store={store} key="provider">
		{component}
	</Provider>,
	dest
);
