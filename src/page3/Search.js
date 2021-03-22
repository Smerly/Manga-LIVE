import React, { useState } from 'react';
import Navbar1 from '../Navbar1';
import NavbarExplore from './NavbarExplore';
import MANGADATA from './MANGADATA.json';

let mangas = [
	{
		id: '1',
		name: '惨め | Mijime',
		author: 'Ernest Cheung',
		artist: 'Ernest Cheung',
		chapters: '120',
	},
	{
		id: '2',
		name: 'One Punch Man',
		author: 'ONE',
		artist: '村田 雄介 | Yusuke Murata',
		chapters: '140',
	},
	{
		id: '3',
		name: 'Solo Leveling',
		author: 'Chu-Gong',
		artist: 'Chu-Gong',
		chapters: '143',
	},
	{
		id: '4',
		name: 'Some Manga',
		author: 'Some Name',
		artist: 'Some Name',
		chapters: 'Some Number',
	},
	{
		id: '5',
		name: 'Some Manga',
		author: 'Some Name',
		artist: 'Some Name',
		chapters: 'Some Number',
	},
	{
		id: '6',
		name: 'Some Manga',
		author: 'Some Name',
		artist: 'Some Name',
		chapters: 'Some Number',
	},
	{
		id: '7',
		name: 'Some Manga',
		author: 'Some Name',
		artist: 'Some Name',
		chapters: 'Some Number',
	},
	{
		id: '8',
		name: 'Some Manga',
		author: 'Some Name',
		artist: 'Some Name',
		chapters: 'Some Number',
	},
	{
		id: '8',
		name: 'Some Manga',
		author: 'Some Name',
		artist: 'Some Name',
		chapters: 'Some Number',
	},
];

// let mangas = [
// 	{
// 		id: '4',
// 		name: 'Some Manga',
// 		author: 'Some Name',
// 		artist: 'Some Name',
// 		chapters: 'Some Number',
// 	},
// 	{
// 		id: '5',
// 		name: 'Some Manga',
// 		author: 'Some Name',
// 		artist: 'Some Name',
// 		chapters: 'Some Number',
// 	},
// 	{
// 		id: '6',
// 		name: 'Some Manga',
// 		author: 'Some Name',
// 		artist: 'Some Name',
// 		chapters: 'Some Number',
// 	},
// 	{
// 		id: '7',
// 		name: 'Some Manga',
// 		author: 'Some Name',
// 		artist: 'Some Name',
// 		chapters: 'Some Number',
// 	},
// 	{
// 		id: '8',
// 		name: 'Some Manga',
// 		author: 'Some Name',
// 		artist: 'Some Name',
// 		chapters: 'Some Number',
// 	},
// 	{
// 		id: '8',
// 		name: 'Some Manga',
// 		author: 'Some Name',
// 		artist: 'Some Name',
// 		chapters: 'Some Number',
// 	},
// ];
// class MangaData extends Component {

// 	render() {
// 		return (
// 			<div>
// 				<MangasList mangas={this.props.mangas} />
// 			</div>
// 		);
// 	}
// }

function Search() {
	const [search, setSearch] = useState('');
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
						<div className="nav-item px-2 mr-4 mb-4">
							<form className="form-inline" action="/action_page.php">
								<input
									type="search"
									placeholder="Search.."
									className="mr-sm-2 pl-3 my-2 ml-3 search3"
									onChange={(e) => {
										setSearch(e.target.value);
									}}
								/>
							</form>
						</div>
						<div className="row" style={{ listStyleType: 'none' }}>
							{MANGADATA.filter((val) => {
								if (search === '') {
									return val;
								} else if (
									val.name.toLowerCase().includes(search.toLowerCase())
								) {
									return val;
								}
							}).map((val, key) => (
								<li key={key}>
									<div className="card m-2 mb-3 p-2 listbox">
										<div className="column">
											<div className="col-sm mb-2" style={{ color: 'black' }}>
												<h3>{val.name}</h3>
											</div>
											<div className="col-sm mb-2" style={{ color: 'black' }}>
												By: {val.author}
											</div>
											<div className="col-sm mb-2" style={{ color: 'black' }}>
												Art by: {val.artist}
											</div>
											<div className="col-sm mb-2" style={{ color: 'black' }}>
												Current Chapters: {val.chapters}
											</div>
										</div>
									</div>
								</li>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Search;
