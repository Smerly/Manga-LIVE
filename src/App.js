import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb, Cart, Card } from 'react-bootstrap';
import styled from 'styled-components';
import './styled';
import { HashRouter as Router, Route } from 'react-router-dom';
import MainPage from './page1/MainPage';
import CreateFilter from './page5/CreateFilter';
import Create from './page2/Create';
import Explore from './page3/Explore';
import Account from './page4/Account';
import FooterBig from './FooterBig';
import Search from './page3/Search';
import CreateResult from './page2/CreateResult';
import Manga from './Manga';
import { useState } from 'react';

import { Provider } from 'react-redux';
import reducers from './reducers';
// import filterReducers from './reducers';
import { createStore } from 'redux';
import filterReducer from './reducers/FilterReducer';
document.body.style = 'background: #ffc000;';

// Save/Load Mangas and Filter

const MANGA_STATE = 'MANGA_STATE';

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem(MANGA_STATE);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(MANGA_STATE, serializedState);
	} catch (err) {
		console.log('Error saving data:' + err);
	}
};

const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
	saveState(store.getState());
});

// App Component

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router className="overallbg">
					<Route exact path="/" component={MainPage} />
					<Route path="/create" component={CreateFilter} />
					<Route path="/explore" component={Explore} />
					<Route path="/account" component={Account} />
					<Route path="/search" component={Search} />
					<Route path="/mangacreating" component={Manga} />
				</Router>
				<FooterBig />
			</div>
		</Provider>
	);
}

export default App;
