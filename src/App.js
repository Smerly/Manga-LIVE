import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb, Cart, Card } from 'react-bootstrap';
import styled from 'styled-components';
import './styled';
import Navbar1 from './Navbar1';
import Hero from './Hero';

function App() {
	return (
		<div className="App">
			<Navbar1 />
			<Hero />
		</div> // Dont touch this div or anything beyond here
	);
}

export default App;
