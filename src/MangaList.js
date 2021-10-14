import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { loadManga } from './actions';

import { queryForManga } from './firebase/firebase';

import { onSnapshot, collection } from 'firebase/firestore';

function MangaList() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadManga());
	}, []);

	// const [search, setSearch] = useState('');
	const mangas = useSelector((state) => state.mangas);
	console.log(mangas);

	// firestore.initializeApp(firebaseConfig);
	// if (true) {
	// 	writeDailySpecial();
	// }
	// console.log(writeDailySpecial);
	return (
		<div>
			<div>
				{mangas.map((mangaLayer2, index1) => {
					return (
						<div key={index1}>
							<div>{mangaLayer2[1].title}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MangaList;
