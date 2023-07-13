// import { useSelector } from 'react-redux';
// import { useParams, Link } from 'react-router-dom';
// import { useState } from 'react';
// import Navbar1 from './Navbar1';
// import NavbarExplore from './page3/NavbarExplore';
// import Modal from 'react-bootstrap/Modal';
// import PlayList from './PlayList/PlayList';
// // Getter function for files with reference to root directory of storage
// import { getStorage, ref } from 'firebase/storage';
// function Post() {
// 	const [hide, setHide] = useState(false);
// 	const handleModal = () => {
// 		setHide(!hide);
// 	};
// 	// Getting files

// 	// useParams takes the current page's URL/path and returns whatever the variable is.
// 	// You know it's a variable if in the path, there is a colon with something like :id or :slug,
// 	// declared in App.js.

// 	// Example, slug here is what the current slug is. If you forget things, look in App.js
// 	const { slug } = useParams();
// 	const mangas = useSelector((state) => state.mangas);

// 	let manga;
// 	console.log(mangas);

// 	// Loop through all mangas to look for the one we want to load for this page.
// 	// If it is the right slug, then use that.

// 	mangas.forEach((m) => {
// 		if (m[1].slug === slug) {
// 			manga = m[1];
// 		}
// 	});
// 	console.log(manga.title);

// 	const titleResp = () => {
// 		const man = manga.title;
// 		console.log(`this${man}`);
// 		if (man.length <= 10) {
// 			return 'responsive-large-title';
// 		} else if (man.length <= 20) {
// 			return 'responsive-medium-title';
// 		} else {
// 			return 'responsive-small-title';
// 		}
// 	};
// 	console.log(titleResp());
// 	const postsPage = () => {
// 		if (manga) {
// 			// console.log(manga.pic);
// 			return (
// 				<div>
// 					<Navbar1 />
// 					<NavbarExplore />
// 					<section className="bg-light" style={{ minHeight: 700 }}>
// 						<div
// 							className="container p-5"
// 							style={{
// 								minHeight: 700,
// 								backgroundColor: 'white',
// 								display: 'flex',
// 								flexDirection: 'row',
// 							}}
// 						>
// 							<div
// 								className="col-md-6 mr-3"
// 								style={{
// 									display: 'flex',
// 									flexDirection: 'column',
// 									justifyContent: 'center',
// 									alignItems: 'center',
// 								}}
// 							>
// 								<div
// 									className="row"
// 									style={{ justifyContent: 'center', alignItems: 'center' }}
// 								>
// 									<img
// 										src="#"
// 										placeholder="Cover of Manga"
// 										height="200px"
// 										width="200px"
// 										className="img-resp"
// 									/>
// 									<div
// 										className="px-3"
// 										style={{
// 											display: 'flex',
// 											flexDirection: 'column',
// 											alignItems: 'center',
// 										}}
// 									>
// 										<h1
// 											id={titleResp()}
// 											className="top-header"
// 											style={{
// 												width: 250,
// 												// height: 60,
// 												// justifySelf: 'center',
// 												textAlign: 'center',
// 											}}
// 										>
// 											{manga.title}
// 										</h1>

// 										<div
// 											className="my-2"
// 											style={{ borderTop: '1px black solid', width: 50 }}
// 										></div>
// 										<h4>{manga.genre}</h4>
// 										<h4>{manga.genre2}</h4>
// 									</div>
// 								</div>
// 								<h5 className="mt-5" style={{ textAlign: 'center' }}>
// 									{manga.description}
// 								</h5>

// 								{/* <Link
// 									className="buttoncustom3 mt-5"
// 									to={`/posts/${manga.slug}/playlist`}
// 									style={{
// 										width: 250,
// 										height: 100,
// 										alignSelf: 'center',
// 										justifySelf: 'center',
// 										textAlign: 'center',
// 										display: 'flex',
// 										justifyItems: 'center',
// 										alignItems: 'center',
// 										textDecoration: 'none',
// 									}}
// 								>
// 									<h3 className="font-weight-bold" style={{ margin: 'auto' }}>
// 										Begin Reading
// 									</h3>
// 								</Link> */}

// 								<button
// 									className="buttoncustom3 mt-5"
// 									style={{
// 										width: 250,
// 										height: 100,
// 										alignSelf: 'center',
// 										justifySelf: 'center',
// 										textAlign: 'center',
// 										display: 'flex',
// 										justifyItems: 'center',
// 										alignItems: 'center',
// 										textDecoration: 'none',
// 									}}
// 									onClick={() => {
// 										handleModal();
// 									}}
// 								>
// 									<h3 className="font-weight-bold" style={{ margin: 'auto' }}>
// 										Begin Reading
// 									</h3>
// 								</button>
// 								<Modal
// 									show={hide}
// 									onHide={() => {
// 										handleModal();
// 									}}
// 									style={
// 										{
// 											// display: 'flex',
// 											// justifyContent: 'center',
// 											// alignItems: 'center',
// 											// marginLeft: '-15%',
// 										}
// 									}
// 								>
// 									<Modal.Header
// 										style={{
// 											// width: '200%',
// 											backgroundColor: 'white',
// 											border: '1px black solid',
// 										}}
// 										closeButton
// 									></Modal.Header>
// 									<Modal.Body
// 										style={{
// 											// width: '200%',
// 											backgroundColor: 'white',
// 											border: '1px black solid',
// 										}}
// 									>
// 										<PlayList />
// 									</Modal.Body>
// 								</Modal>
// 							</div>
// 							<div
// 								className="col-md-6 ml-3"
// 								style={{ borderLeft: '1px black solid' }}
// 							>
// 								<p className="m-3 bg-light p-5">{manga.summary}</p>
// 							</div>
// 						</div>
// 					</section>
// 				</div>
// 			);
// 		}
// 	};

// 	// problems

// 	// 1. special characters in titles

// 	// 2. Can't have same title as another title

// 	return <div>{postsPage()}</div>;
// }

// export default Post;

import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar1 from './Navbar1';
import NavbarExplore from './page3/NavbarExplore';
import Modal from 'react-bootstrap/Modal';
import PlayList from './PlayList/PlayList';
// Getter function for files with reference to root directory of storage
import { getStorage, ref } from 'firebase/storage';
function Post() {
	const [hide, setHide] = useState(false);
	const handleModal = () => {
		setHide(!hide);
	};
	// Getting files

	// useParams takes the current page's URL/path and returns whatever the variable is.
	// You know it's a variable if in the path, there is a colon with something like :id or :slug,
	// declared in App.js.

	// Example, slug here is what the current slug is. If you forget things, look in App.js
	const { slug } = useParams();
	const mangas = useSelector((state) => state.mangas);

	let manga;
	console.log(mangas);

	// Loop through all mangas to look for the one we want to load for this page.
	// If it is the right slug, then use that.

	mangas.forEach((m) => {
		if (m[1].slug === slug) {
			manga = m[1];
		}
	});
	console.log(manga.title);

	const titleResp = () => {
		const man = manga.title;
		console.log(`this${man}`);
		if (man.length <= 10) {
			return 'responsive-large-title';
		} else if (man.length <= 20) {
			return 'responsive-medium-title';
		} else {
			return 'responsive-small-title';
		}
	};
	console.log(titleResp());
	const postsPage = () => {
		if (manga) {
			// console.log(manga.pic);
			return (
				<div>
					<Navbar1 />
					<NavbarExplore />
					<section className="bg-light" style={{ minHeight: 700 }}>
						<div
							className="container p-5"
							style={{
								minHeight: 700,
								backgroundColor: 'white',
								display: 'flex',
								flexDirection: 'row',
							}}
						>
							<div
								className="col-md-6 mr-3"
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<div
									className="row"
									style={{ justifyContent: 'center', alignItems: 'center' }}
								>
									<img
										src="#"
										placeholder="Cover of Manga"
										height="200px"
										width="200px"
										className="img-resp"
									/>
									<div
										className="px-3"
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
										}}
									>
										<h1
											id={titleResp()}
											className="top-header"
											style={{
												width: 250,
												// height: 60,
												// justifySelf: 'center',
												textAlign: 'center',
											}}
										>
											{manga.title}
										</h1>

										<div
											className="my-2"
											style={{ borderTop: '1px black solid', width: 50 }}
										></div>
										<h4>{manga.genre}</h4>
										<h4>{manga.genre2}</h4>
									</div>
								</div>
								<h5 className="mt-5" style={{ textAlign: 'center' }}>
									{manga.description}
								</h5>

								{/* <Link
									className="buttoncustom3 mt-5"
									to={`/posts/${manga.slug}/playlist`}
									style={{
										width: 250,
										height: 100,
										alignSelf: 'center',
										justifySelf: 'center',
										textAlign: 'center',
										display: 'flex',
										justifyItems: 'center',
										alignItems: 'center',
										textDecoration: 'none',
									}}
								>
									<h3 className="font-weight-bold" style={{ margin: 'auto' }}>
										Begin Reading
									</h3>
								</Link> */}

								<button
									className="buttoncustom3 mt-5"
									style={{
										width: 250,
										height: 100,
										alignSelf: 'center',
										justifySelf: 'center',
										textAlign: 'center',
										display: 'flex',
										justifyItems: 'center',
										alignItems: 'center',
										textDecoration: 'none',
									}}
									onClick={() => {
										handleModal();
									}}
								>
									<h3 className="font-weight-bold" style={{ margin: 'auto' }}>
										Begin Reading
									</h3>
								</button>
								<Modal
									show={hide}
									onHide={() => {
										handleModal();
									}}
									style={{
										// width: '80%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										maxWidth: 'none !important',
										border: '1px red solid',
										// marginLeft: '-15%',
									}}
									// !!! You can put attributes here according to the react-bootstrap docs (like below) !!!

									dialogClassName="modal-lg"
									scrollable="true"
									centered="true"
								>
									<Modal.Header
										style={{
											// width: '200%',
											backgroundColor: 'white',
											border: '1px black solid',
										}}
										className="modal-size"
										closeButton
									></Modal.Header>
									<Modal.Body
										style={{
											// width: '200%',
											backgroundColor: 'white',
											border: '1px black solid',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}
										className="modal-size"
									>
										<PlayList />
									</Modal.Body>
								</Modal>
							</div>
							<div
								className="col-md-6 ml-3"
								style={{ borderLeft: '1px black solid' }}
							>
								<p className="m-3 bg-light p-5">{manga.summary}</p>
							</div>
						</div>
					</section>
				</div>
			);
		}
	};

	// problems

	// 1. special characters in titles

	// 2. Can't have same title as another title

	return <div>{postsPage()}</div>;
}

export default Post;
