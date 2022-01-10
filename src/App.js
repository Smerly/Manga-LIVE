// Styling imports

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styled';

// Router imports

import { HashRouter as Router, Route } from 'react-router-dom';

// Components

import MainPage from './page1/MainPage';
import CreateFilter from './page5/CreateFilter';
import Explore from './page3/Explore';
import Account from './page4/Account';
import FooterBig from './FooterBig';
import Search from './page3/Search';
import Manga from './Manga';

// Redux Imports

import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

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
const store = createStore(reducers, persistedState, applyMiddleware(thunk));
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
					{/* {() => {
						for ()
					}} */}
				</Router>
				<FooterBig />
			</div>
		</Provider>
	);
}

export default App;
