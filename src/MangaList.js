import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { loadManga } from './actions';

function MangaList() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadManga());
	}, []);

	const [search, setSearch] = useState('');
	const mangas = useSelector((state) => state.mangas);

	const MangaList = mangas
		.filter((val) => {
			if (search == '') {
				return val;
			} else if (val.title.toLowerCase().includes(search.toLowerCase())) {
				return val;
			}
		})
		.map((manga, index) => {
			// console.log(manga);
			console.log(manga[1].title);
			console.log('4:26 pm');

			return (
				<li key={index} style={{ listStyleType: 'none' }}>
					<div className="card m-2 mb-3 listbox">
						<button
							className="column p-2"
							style={{
								width: '15rem',
								height: '15rem',
								background: 'none',
								border: 'none',
							}}
						>
							<div className="col-sm mb-2" style={{ color: 'black' }}>
								<h3>{manga[1].title}</h3>
							</div>
							<div className="col-sm mb-2" style={{ color: 'black' }}>
								By: {manga[1].author}
							</div>
							<div className="col-sm mb-2" style={{ color: 'black' }}>
								Art by: {manga[1].artist}
							</div>
							{/* <div className="col-sm mb-2" style={{ color: 'black' }}>
								Chapters: {mangaLayer2[1].pages}
							</div> */}
						</button>
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
