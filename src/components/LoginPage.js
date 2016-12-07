import React, { Component, PropTypes } from 'react';
import { Button, Grid, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class LoginPage extends Component {
	static propTypes = {
		onFormSubmit: PropTypes.func
	}

	constructor(props) {
		super(props);

		this.input = {};
		// this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		if (this.input.username) {
			this.input.username.focus();
		}
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onFormSubmit({
			username: this.input.username.value(),
			passowrd: this.input.passowrd.value()
		});
	}

	render() {
		return (
			<Grid>
				<Col xs={4} xsOffset={4}>
					<form onSubmit={this.onSubmit}>
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