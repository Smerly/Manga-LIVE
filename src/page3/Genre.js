import React, { useState } from 'react';
import '../App.css';
import Create from '../page2/Create';
import MangaList from '../MangaList';

function Genre() {
	return (
		<div className="container">	
			<div className="column pb-5 mb-5" style={{ minHeight: 800 }}>
				<h1
					className="top-header pt-5 mb-5"
					style={{ borderBottom: '1px black solid', width: 400 }}
				>
					Genre
				</h1>
				<div className="row"></div>
				<MangaList filterQuery="genre" />
				<div className="row"></div>
			</div>
		</div>
	);
}
export default Genre;
