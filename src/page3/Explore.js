import React from 'react';
import NavbarExplore from './NavbarExplore';
import Popular from './Popular';
import Navbar1 from '../Navbar1';
import '../App.css';
import Hots from './Hots';
import New from './New';
import MangaData from './MangaData';

function Explore() {
	return (
		<div>
			<Navbar1 />
			<NavbarExplore />
			<section className="bg-light" style={{ minHeight: 700 }}>
				<Popular />
				<div className="divider" style={{ backgroundColor: '#ffc000' }}></div>
				<Hots />
				<div className="divider" style={{ backgroundColor: '#ffc000' }}></div>
				<New />
				<div className="divider" style={{ backgroundColor: '#ffc000' }}></div>
				<MangaData />
			</section>
		</div>
	);
}
export default Explore;
