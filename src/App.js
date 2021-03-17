import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb, Cart, Card } from 'react-bootstrap';
import styled from 'styled-components';
import './styled';
import { HashRouter as Router, Route } from 'react-router-dom';
import MainPage from './page1/MainPage';
import Create from './page2/Create';
import Explore from './page3/Explore';
import Account from './page4/Account';
import FooterBig from './FooterBig';

document.body.style = 'background: #ffc000;';

function App() {
	return (
		<div className="App">
			<Router className="overallbg">
				<Route exact path="/" component={MainPage} />
				<Route path="/create" component={Create} />
				<Route path="/explore" component={Explore} />
				<Route path="/account" component={Account} />
				{/*Dont touch this div or anything beyond here */}
			</Router>
			<FooterBig />
		</div>
	);
}

export default App;
