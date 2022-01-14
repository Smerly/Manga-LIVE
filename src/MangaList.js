import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadManga } from './actions';

function MangaList() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadManga());
	}, []);

	const [search, setSearch] = useState('');
	const mangas = useSelector((state) => state.mangas);
	// console.log(mangas);

	const MangaList = mangas
		.filter((val) => {
			if (search == '') {
				return val;
			} else if (val.title.toLowerCase().includes(search.toLowerCase())) {
				return val;
			}
		})
		.map((manga, index) => {
			console.log(manga);

			return (
				<li key={index} style={{ listStyleType: 'none' }}>
					<div className="card m-2 mb-3 listbox">
						<Link
							className="column p-3"
							style={{
								width: '15rem',
								height: '15rem',
								background: 'none',
								border: 'none',
								display: 'flex',
								flexWrap: 'wrap',
								flexDirection: 'column',
								textDecoration: 'none',
							}}
							to={`/posts/${manga[1].slug}`}
						>
							<h2 className="mb-2" style={{ color: 'black' }}>
								<h3>{manga[1].title}</h3>
							</h2>
							<div className="mb-3" style={{ color: '#ffc000' }}>
								By: {manga[1].author}
							</div>
							<h4 style={{ color: 'black' }}> Genre </h4>
							<div className="row pl-3 mt-3">
								<div className="mb-2 mr-3" style={{ color: 'black' }}>
									{manga[1].genre}
								</div>
								<div className="mb-2" style={{ color: 'black' }}>
									{manga[1].genre2}
								</div>
							</div>

							{/* <div className="col-sm mb-2" style={{ color: 'black' }}>
								Chapters: {mangaLayer2[1].pages}
							</div> */}
						</Link>
					</div>
				</li>
			);
		});

	return (
		<div>
			<div className="container bg-light" style={{ minHeight: 700 }}>
				<form className="form-inline mt-5 mb-5" action="/action_page.php">
					{/* <input
						type="search"
						placeholder="Search.."
						className="mr-sm-2 pl-3 my-2 ml-3 search3 mt-5"
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/> */}
				</form>
				<div className="row justify-content-center align-items-center">
					{MangaList}
				</div>
			</div>
		</div>
	);
}

export default MangaList;
