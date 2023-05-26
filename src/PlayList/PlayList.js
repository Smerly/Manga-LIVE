import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './PlayList.css';

// Getter function + root reference for getting files in firebase storage, and use it with downloadurl
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';

function PlayList() {
	const [img, setImg] = useState('');
	const [pageNumber, setPageNumber] = useState(1);
	const [images, setImages] = useState([]);
	const tempImgs = [];
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
	const desiredImgRef = ref(
		storage,
		`playlists/${manga.slug}/${pageNumber}.png`
	);
	const desiredDirectoryRef = ref(storage, `playlists/${manga.slug}`);

	// getDownloadURL(ref(storage, `playlists/${manga.slug}/${pageNumber}.png`))
	// 	.then((url) => {
	// 		setImages([...images, url]);
	// 		console.log(url);
	// 	})
	// 	.catch(() => {
	// 		console.log('unable to download images.');
	// 	});

	// Figured this out solely on my own.
	// listAll(desiredDirectoryRef)
	// 	.then((res) => {
	// 		for (let i = 0; i < res.items.length; i++) {
	// 			getDownloadURL(res.items[i]).then((url) => {
	// 				console.log(url);
	// 				if (!images.includes(url)) {
	// 					tempImgs.push(url);
	// 					// images.push(url);
	// 				}
	// 				console.log(images);
	// 			});
	// 		}
	// 	})
	// 	.catch((err) => {
	// 		console.log('could not get directory');
	// 	});

	// Just this won't work, and will infinitely loop, because
	// Because it is a useState, the component re-renders whenever images is changed here,
	// but if it changes from it being called, then it will do it again.
	// setImages((images) => [...images, []]);

	// Figured this out solely on my own. So, because you don't want stuff to loop with useState,
	// You use a useEffect with [] to make it run only once, but make the awaiting run first.

	// Rest of code is basically, using an array to store all of the manga's page images
	useEffect(() => {
		listAll(desiredDirectoryRef)
			.then((res) => {
				for (let i = 0; i < res.items.length; i++) {
					getDownloadURL(res.items[i]).then((url) => {
						console.log(url);
						if (!images.includes(url)) {
							tempImgs.push(url);
							setImages((images) => {
								console.log('did');
								return [...images, url];
							});
						}
						console.log(images);
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	console.log(images);
	return (
		<div>
			{/* <button
				onClick={() => {
					console.log(images);
					setImages((images) => [...images, []]);
				}}
			>
				adasd
			</button> */}
			{images.map((page, index) => {
				return (
					<div className="reading-main" key={index}>
						{' '}
						<img src={page} style={{ width: 100, height: 100 }} />
					</div>
				);
			})}
		</div>
	);
}

export default PlayList;
