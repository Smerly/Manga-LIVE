import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';

// function MangaList() {
// 	const mangas = useSelector((state) => state.mangas);
// 	const { own, help } = useSelector((state) => state.filters);
// 	const MangaList = mangas.map((manga, index) => {
// 		return (
// 			<div key={index} className="bg-gray">
// 				<div className="container bg-light" style={{ minHeight: 700 }}>
// 					<div className="card m-2 mb-3 p-2 listbox">
// 						<div className="column">
// 							<div className="col-sm mb-2" style={{ color: 'black' }}>
// 								<h3>{manga.title}</h3>
// 							</div>
// 							<div className="col-sm mb-2" style={{ color: 'black' }}>
// 								{/* By: {val.author} */}
// 							</div>
// 							<div className="col-sm mb-2" style={{ color: 'black' }}>
// 								{/* Art by: {val.artist} */}
// 							</div>
// 							<div className="col-sm mb-2" style={{ color: 'black' }}>
// 								Current Chapters: {manga.page}
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	});

// 	return <div>{MangaList}</div>;
// }

function MangaList() {
	const [search, setSearch] = useState('');
	const mangas = useSelector((state) => state.mangas);
	const { own, help } = useSelector((state) => state.filters);
	const MangaList = mangas
		.filter((val) => {
			if (search == '') {
				return val;
			} else if (val.title.toLowerCase().includes(search.toLowerCase())) {
				return val;
			}
		})
		.map((manga, index) => {
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
								<h3>{manga.title}</h3>
							</div>
							<div className="col-sm mb-2" style={{ color: 'black' }}>
								By: {manga.author}
							</div>
							<div className="col-sm mb-2" style={{ color: 'black' }}>
								Art by: {manga.artist}
							</div>
							<div className="col-sm mb-2" style={{ color: 'black' }}>
								Chapters: {manga.pages}
							</div>
						</button>
					</div>
				</li>
			);
		});

	return (
		<div>
			<div className="container bg-light" style={{ minHeight: 700 }}>
				<form className="form-inline mt-5 mb-5" action="/action_page.php">
					<input
						type="search"
						placeholder="Search.."
						className="mr-sm-2 pl-3 my-2 ml-3 search3 mt-5"
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
				</form>
				<div className="row justify-content-center align-items-center">
					{MangaList}
				</div>
			</div>
		</div>
	);
}

export default MangaList;
