import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb, Cart, Card } from 'react-bootstrap';
import styled from 'styled-components';
import './styled';
import { HashRouter as Router, Route } from 'react-router-dom';
import MainPage from './page1/MainPage';
import Footer from './Footer';

document.body.style = 'background: #ffc000;';

function App() {
	return (
		<Router className="overallbg">
			<div className="App">
				<Route exact path="/" component={MainPage} />
				<Footer />
			</div>{' '}
			{/*Dont touch this div or anything beyond here */}
		</Router>
	);
}

export default App;
