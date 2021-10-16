import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Create from '../page2/Create';

import '../App.css';

function CreateFilter() {
	return (
		<Router>
			<Route exact path="/create" component={Create} />
		</Router>
	);
}

export default CreateFilter;
