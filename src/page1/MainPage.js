import React from 'react';
import Hero from './Hero';
import MindofReader from './MindofReader';
import Tops from './Tops';
import Navbar1 from '../Navbar1';

function MainPage() {
	return (
		<div>
			<Navbar1 />
			<Hero />
			<MindofReader />
			<Tops />
		</div>
	);
}

export default MainPage;
