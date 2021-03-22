import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Create from '../page2/Create';
import Filter from './Filter';
import '../App.css';

function CreateFilter() {
	return (
		<Router>
			<Route exact path="/create" component={Create} />
			<Route path="/filter" component={Filter} />
		</Router>
	);
}

export default CreateFilter;
