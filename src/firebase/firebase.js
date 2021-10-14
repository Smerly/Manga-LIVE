import { initializeApp } from 'firebase/app';
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

import firebaseConfig from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Mangas = doc(db, 'dailySpecial4/2021-09-14');

// Functions

// Adds new section

export async function writeManga(
	titleIn,
	genreIn,
	genreIn2,
	summaryIn,
	picIn,
	descriptionIn,
	pageIn,
	authorIn,
	artistIn
) {
	const docData = {
		title: titleIn,
		genre: genreIn,
		genre2: genreIn2,
		summary: summaryIn,
		pic: picIn,
		description: descriptionIn,
		page: pageIn,
		author: authorIn,
		artist: artistIn,
	};

	try {
		await setDoc(Mangas, docData, { merge: true });
		console.log(`This value has been written to the db`);
	} catch (error) {
		console.log(`I've got an error ${error}`);
	}
}

// Adds new manga

const mangaCollection = collection(db, 'mangas');

export async function addNewManga(
	titleIn,
	genreIn,
	genreIn2,
	summaryIn,
	picIn,
	descriptionIn,
	pageIn,
	authorIn,
	artistIn
) {
	const newDoc = await addDoc(mangaCollection, {
		title: titleIn,
		genre: genreIn,
		genre2: genreIn2,
		summary: summaryIn,
		pic: picIn,
		description: descriptionIn,
		page: pageIn,
		author: authorIn,
		artist: artistIn,
	});

	console.log(`your doc was created at ${newDoc.path}`);
}

// Reads a doc

export async function readSingleManga() {
	const mySnapshot = await getDoc(Mangas);
	if (mySnapshot.exists()) {
		const docData = mySnapshot.data();
		console.log(`My data is ${JSON.stringify(docData)}`);
	}
}

// Use onSnapshot method to listen to doc.
// "specialOfTheDay" is the doc you want to listen to.
// "docSnapshot" is the function that doesnt something, for example, listen and check.

let dailySpecialSubscribe;

export function listenToManga() {
	dailySpecialSubscribe = onSnapshot(Mangas, (docSnapshot) => {
		const docData = docSnapshot.data();
		console.log(`In realtime, docData is ${JSON.stringify(docData)}`);
	});
}

// Only call the listener at appropraite time to lower network usage. Example is below and dailySpecialSubscribe above.
export function cancelMyListenerAtAppropriateTime() {
	dailySpecialSubscribe();
}

// Read multiple documents by creating a query:

export async function queryForManga() {
	const mangaQuery = query(
		collection(db, 'mangas')
		// orderBy('price')
	);
	const querySnapshot = await getDocs(mangaQuery);
	const allMangasArray = [];
	const allMangas = querySnapshot.forEach((snap) => {
		const manga = [snap.id, snap.data()];
		allMangasArray.push(manga);
		// console.log(snap.data);
	});

	return allMangasArray;
}
