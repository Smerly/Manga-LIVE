import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Getter function + root reference for getting files in firebase storage, and use it with downloadurl
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

function PlayList() {
	const mangas = useSelector((state) => state.mangas);
	// useParams takes the current page's URL/path and returns whatever the variable is.
	// You know it's a variable if in the path, there is a colon with something like :id or :slug,
	// declared in App.js.

	// Example, slug here is what the current slug is. If you forget things, look in App.js
	const { slug } = useParams();

	// Loop through all mangas to look for the one we want to load for this page.
	// If it is the right slug, then use that.
	let manga;

	mangas.forEach((m) => {
		if (m[1].slug === slug) {
			manga = m[1];
		}
	});

	// Getting files from firebase storage
	const storage = getStorage();
	const desiredImgRef = ref(storage, `playlists/${manga.title}`);
	const pages = [];

	getDownloadURL(desiredImgRef)
		.then((url) => {
			console.log(desiredImgRef);
		})
		.catch(() => {
			console.log('unable to download images.');
		});

	return (
		<div>
			<div></div>
		</div>
	);
}

export default PlayList;
