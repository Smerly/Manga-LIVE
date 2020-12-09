import React from 'react';
import Hero from './Hero';
import MindofReader from './MindofReader';
import Tops from './Tops';
import Navbar1 from '../Navbar1';
import Create from '../page2/Create';
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
