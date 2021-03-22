import React, { Component } from 'react';

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

// class MangaData extends Component {

// 	render() {
// 		return (
// 			<div>
// 				<MangasList mangas={this.props.mangas} />
// 			</div>
// 		);
// 	}
// }

function MangaData() {
	return (
		<div className="container">
			<div className="column pb-5 mb-5" style={{ minHeight: 800 }}>
				<h1
					className="top-header pt-5 mb-5"
					style={{ borderBottom: '1px black solid', width: 400 }}
				>
					Full List
				</h1>{' '}
				<div className="row" style={{ listStyleType: 'none' }}>
					{Object.keys(mangas).map((key) => (
						<li style={{}} key={key}>
							<div className="card m-2 mb-3 p-2 listbox">
								<div className="column">
									<div className="col-sm mb-2" style={{ color: 'black' }}>
										<h3>{mangas[key].name}</h3>
									</div>
									<div className="col-sm mb-2" style={{ color: 'black' }}>
										By: {mangas[key].author}
									</div>
									<div className="col-sm mb-2" style={{ color: 'black' }}>
										Art by: {mangas[key].artist}
									</div>
									<div className="col-sm mb-2" style={{ color: 'black' }}>
										Current Chapters: {mangas[key].chapters}
									</div>
								</div>
							</div>
						</li>
					))}
				</div>
			</div>
		</div>
	);
}

export default MangaData;
