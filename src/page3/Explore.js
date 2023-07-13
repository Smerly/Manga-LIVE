import React from 'react';
import NavbarExplore from './NavbarExplore';
import Popular from './Popular';
import Navbar1 from '../Navbar1';
import '../App.css';
import Genre from './Genre';

function Explore() {
	return (
		<div>
			<Navbar1 />
			<NavbarExplore />
			<section className="bg-light" style={{ minHeight: 700 }}>
				<Popular />
				<div className="divider" style={{ backgroundColor: '#ffc000' }}></div>
				<Genre />
				<div className="divider" style={{ backgroundColor: '#ffc000' }}></div>

				<div className="divider" style={{ backgroundColor: '#ffc000' }}></div>
			</section>
		</div>
	);
}
export default Explore;
