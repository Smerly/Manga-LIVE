import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
// import { writeDailySpecial } from './firebase/firebase';
import { queryForManga } from './firebase/firebase';
// import { firebase } from './firebase/firebase';

import { onSnapshot, collection } from 'firebase/firestore';

console.log(queryForManga()[1]);
function MangaList() {
	// const [search, setSearch] = useState('');
	// const mangas = useSelector((state) => state.mangas);
	// const { own, help } = useSelector((state) => state.filters);

	// firestore.initializeApp(firebaseConfig);
	// if (true) {
	// 	writeDailySpecial();
	// }
	// console.log(writeDailySpecial);
	return (
		<div>
			<div>{}</div>
		</div>
	);
}

export default MangaList;
