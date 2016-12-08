import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Grid, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import * as authActions from '../../redux/modules/auth';

class Login extends Component {

	constructor(props) {
		super(props);

		this.input = {};
	}

	componentDidMount() {
		if (this.input.username) {
			this.input.username.focus();
		}
	}

	onFormSubmit(e) {
		e.preventDefault()
		const { username: { value: username }, password: { value: password } } = this.input
		this.props.login(username, password);
	}

	render() {
		return (
			<Grid>
				<Col xs={4} xsOffset={4}>
					<form onSubmit={(e) => {this.onFormSubmit(e)}}>
						<FormGroup>
							<ControlLabel>Username</ControlLabel>
							<input
								className="form-control"
								ref={(c) => (this.input.username = c)}
								type="text"
								placeholder="Username"
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Password</ControlLabel>
							<input
								className="form-control"
								ref={(c) => (this.input.password = c)}
								type="password"
								placeholder="Password"
							/>
						</FormGroup>
						<Button type="submit">Login</Button>
					</form>
				</Col>
			</Grid>
		);
	}
}

export default connect(
	state => ({user: state.auth.user}),
	dispatch => bindActionCreators(authActions, dispatch)
)(Login);