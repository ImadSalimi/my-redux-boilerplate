import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import config from '../../config';

class App extends Component {
	static propTypes = {
		children: PropTypes.object.isRequired
	};

	render() {
		const { user } = this.props;
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
								<span>{config.app.title}</span>
							</IndexLink>
						</Navbar.Brand>
						<Navbar.Toggle/>
					</Navbar.Header>

					<Navbar.Collapse>
						<Nav navbar>
							{user && <LinkContainer to="/chat">
								<NavItem>Chat</NavItem>
							</LinkContainer>}

							<LinkContainer to="/about">
								<NavItem>About Us</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
};

export default connect(
	(state) => ({user: state.auth.user }))(App);