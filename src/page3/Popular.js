import React from 'react';
import '../App.css';
import MangaList from '../MangaList';

function Popular() {
	return (
		<div className="container">
			<div className="column pb-5 mb-5" style={{ minHeight: 800 }}>
				<h1
					className="top-header pt-5 mb-5"
					style={{ borderBottom: '1px black solid', width: 400 }}
				>
					Tops
				</h1>
				<div className="row">
					<MangaList filterQuery="likes" />
				</div>
			</div>
		</div>
	);
}
export default Popular;
