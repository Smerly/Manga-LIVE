// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
// 	apiKey: 'AIzaSyBJjWPETurz47yap-YMj9-vSXyLHsKSKXI',
// 	authDomain: 'manga-live-6227a.firebaseapp.com',
// 	projectId: 'manga-live-6227a',
// 	storageBucket: 'manga-live-6227a.appspot.com',
// 	messagingSenderId: '676022570827',
// 	appId: '1:676022570827:web:68e7afd40db7d5041e22ce',
// 	measurementId: 'G-2JE9MV616G',
// };

// const app = initializeApp(firebaseConfig);
// export default getFirestore;

import { initializeApp } from 'firebase/app';
// import firebase from 'firebase';
import {
	initializeFirestore,
	CACHE_SIZE_UNLIMITED,
	getFirestore,
	doc,
	setDoc,
	getDoc,
	updateDoc,
	collection,
	addDoc,
	onSnapshot,
	query,
	where,
	orderBy,
	limit,
	getDocs,
} from 'firebase/firestore';

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

// const firestore = getFirestore();
// firestore.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const specialOfTheDay = doc(db, 'dailySpecial3/2021-09-14');

export async function writeDailySpecial() {
	const docData = {
		description: 'A description',
		price: 3.99,
		milk: 'Whole',
		vegan: false,
	};

	// Will completely overwrite something if the name is the same

	//								If you do merge true, it will do what updateDoc does, but it will create it if it doesnt exist

	// setDoc(specialOfTheDay, docData, { merge: true });

	// Only if already exists, and only overwrites what you need to overwrite

	// updateDoc(specialOfTheDay, docData);

	try {
		await setDoc(specialOfTheDay, docData, { merge: true });
		console.log(`This value has been written to the db`);
	} catch (error) {
		console.log(`I've got an error ${error}`);
	}
}

const ordersCollection = collection(db, 'orders');

async function addANewDocument() {
	const newDoc = await addDoc(ordersCollection, {
		customer: 'Arthur',
		drink: 'Latte',
		total_cost: (100 + Math.floor(Math.random() * 400)) / 100,
	});
}

// Reads a doc

async function readASingleDocument() {
	const mySnapshot = await getDoc(specialOfTheDay);
	if (mySnapshot.exists()) {
		const docData = mySnapshot.data();
		console.log(`My data is ${JSON.stringify(docData)}`);
	}
}

// Use onSnapshot method to listen to doc.
// "specialOfTheDay" is the doc you want to listen to.
// "docSnapshot" is the function that doesnt something, for example, listen and check.

let dailySpecialSubscribe;

function listenToADocument() {
	dailySpecialSubscribe = onSnapshot(specialOfTheDay, (docSnapshot) => {
		const docData = docSnapshot.data();
		console.log(`In realtime, docData is ${JSON.stringify(docData)}`);
	});
}

// Only call the listener at appropraite time to lower network usage. Example is below and dailySpecialSubscribe above.

function cnancelMyListenerAtAppropriateTime() {
	dailySpecialSubscribe();
}

// Read multiple documents by creating a query:

async function queryForDocuments() {
	const customerOrdersQuery = query(
		collection(db, 'orders'),
		where('drink', '==', 'latte'),
		orderBy('price'),
		limit(10)
	);

	// get multiple docs
	const querySnapshot = await getDocs(customerOrdersQuery);

	// const allDocs = querySnapshot.docs((snap) => {
	// 	console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`);
	// });

	// use forEach() if you wan to iterate through each snapshot

	let callLaterListener;
	querySnapshot.forEach((snap) => {
		console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`);
	});

	// How to do listeners for querySnapshot

	callLaterListener = onSnapshot(customerOrdersQuery, (querySnapshot) => {
		console.log(JSON.stringify(querySnapshot.docs.map((e) => e.data())));
	});
}

// writeDailySpecial();
// addANewDocument();
// readASingleDocument();
// queryForDocuments();
