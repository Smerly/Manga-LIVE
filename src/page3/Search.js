import React, { useState } from 'react';
import Navbar1 from '../Navbar1';
import NavbarExplore from './NavbarExplore';
import MangaList from '../MangaList';
import Manga from '../Manga';

function Search() {
	const [search, setSearch] = useState('');
	const [image, setImage] = useState([]);

	// use
	// 	setImage((image) => [...image, 'hi']);
	// }, 2000);

	return (
		<div>
			<Navbar1 />
			<NavbarExplore />
			<section className="bg-light" style={{ minHeight: 700 }}>
				<div className="container">
					<div className="column pb-5 mb-5" style={{ minHeight: 800 }}>
						<h1
							className="top-header pt-5 mb-5"
							style={{ borderBottom: '1px black solid', width: 400 }}
						>
							Full List
						</h1>{' '}
						<MangaList />
					</div>
				</div>
			</section>
		</div>
	);
}

export default Search;
