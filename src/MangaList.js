import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { writeDailySpecial } from './firebase/firebase';
// import { firebase } from './firebase/firebase';

import { onSnapshot, collection } from 'firebase/firestore';

function MangaList() {
	// const [search, setSearch] = useState('');
	// const mangas = useSelector((state) => state.mangas);
	// const { own, help } = useSelector((state) => state.filters);

	// useEffect(() => {
	// 	onSnapshot(collection(db, 'mangas'), (snapshot) => {
	// 		console.log(snapshot);
	// 	});
	// });

	// ------

	// const db = firebase.firestore().collection('mangas');

	const firebaseConfig = {
		apiKey: 'AIzaSyBJjWPETurz47yap-YMj9-vSXyLHsKSKXI',
		authDomain: 'manga-live-6227a.firebaseapp.com',
		projectId: 'manga-live-6227a',
		storageBucket: 'manga-live-6227a.appspot.com',
		messagingSenderId: '676022570827',
		appId: '1:676022570827:web:68e7afd40db7d5041e22ce',
		measurementId: 'G-2JE9MV616G',
	};

	// firebase.initializeApp(firebaseConfig);
	// var db = firebase.firestore();

	// firestore.initializeApp(firebaseConfig);
	if (true) {
		writeDailySpecial();
	}
	console.log(writeDailySpecial);
	return (
		<div>
			<div></div>
		</div>
	);
}

export default MangaList;
