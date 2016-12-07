import React from 'react';
import { Link } from 'react-router';

export default (props) => (
	<div>
		<h1>Our react app!</h1>
		click <Link to="/login">here</Link> to login!
	</div>
);