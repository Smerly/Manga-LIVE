import React from 'react';
import Navbar2 from '../Navbar2';
import '../App.css';
import Filter from '../page5/Filter';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateForm from './CreateForm';
import CreateResult from './CreateResult';
import mangaReducer from '../reducers/reducer';
import { HashRouter as Router, Route } from 'react';

function Create(props) {
	return (
		<div>
			<CreateForm />
		</div>
	);
}

export default Create;
