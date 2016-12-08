import parseValidation from '../../helpers/parse-validation';

const LOAD = 'awesome-project/auth/LOAD';
const LOAD_SUCCESS = 'awesome-project/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'awesome-project/auth/LOAD_FAIL';
const LOGIN = 'awesome-project/auth/LOGIN';
const LOGIN_SUCCESS = 'awesome-project/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'awesome-project/auth/LOGIN_FAIL';
const LOGOUT = 'awesome-project/auth/LOGOUT';
const LOGOUT_SUCCESS = 'awesome-project/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'awesome-project/auth/LOGOUT_FAIL';

const initialState = {
	loaded: false
}

export default function reducer(state = initialState, action = {}) {
	console.log(action)
	switch (action.type) {
		case LOGIN_SUCCESS:
			console.log(parseValidation(action.result.data))
			break;
		case LOGIN_FAIL:
			console.log(parseValidation(action.error.response.data))
			break;
		default:
	}
	
	return state;
}

export function isLoaded(globalState) {
	return globalState.auth && globalState.auth.loaded;
}

export function load() {
	return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/loadAuth')
  };
}

export function login(username, password) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/login', {
    	username,
    	password
    })
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}