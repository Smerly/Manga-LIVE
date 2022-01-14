import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar1 from './Navbar1';
import { useSelector } from 'react-redux';
import { auth } from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
	setOwn,
	setHelp,
	setManga,
	setVoice,
	setTranslate,
	setProgram,
	setWrite,
	setOther,
	setEnglish,
	setChinese,
	setKorean,
	setJapanese,
	setSpanish,
	setFrench,
	setIndonesia,
	setThai,
	setMale,
	setFemale,
	setBoth,
} from './actions';
import { NavLink } from 'react-router-dom';

import { addNewManga } from './firebase/firebase';
function Manga() {
	const history = useHistory();
	const [user, setUser] = useState({});
	const [username, setUserName] = useState('');

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
		if (user.email !== undefined && user.email) {
			const name = user.email.replace(/@.*$/, '');
			if (name !== '') {
				setUserName(name);
			}
		}
	});

	const dispatch = useDispatch();
	// const {
	// 	own,
	// 	help,
	// 	manga,
	// 	voice,
	// 	translate,
	// 	program,
	// 	write,
	// 	other,
	// 	english,
	// 	chinese,
	// 	korean,
	// 	japanese,
	// 	spanish,
	// 	french,
	// 	indonesia,
	// 	thai,
	// 	male,
	// 	female,
	// 	both,
	// } = useSelector((state) => {
	// 	return state.filters;
	// });

	const temp = useSelector((state) => state.filters);

	const [title, setTitle] = useState('');
	const [genre, setGenre] = useState('');
	const [genre2, setGenre2] = useState('');
	const [summary, setSummary] = useState('');
	const [pic, setPic] = useState('Some Pic');
	const [description, setDescription] = useState('');
	const [page, setPage] = useState('0');
	const [author, setAuthor] = useState('');
	const [artist, setArtist] = useState('');
	const getTheAuthor = () => {
		if (author === '') {
			return username;
		} else {
			return author;
		}
	};

	const getSlug = () => {
		if (title) {
			const slug = title.replace(/\W+()/g, (match, chr) => {
				return '-';
			});
			return slug;
		} else {
			return '';
		}
	};

	return (
		<div className="bg-gray" style={{ minHeight: 700 }}>
			<Navbar1 />
			<div className="container bg-light vh100 pt-5 px-5">
				<form className="column-flex">
					<div style={{ marginBottom: 50 }}>
						<label
							class="labels-create"
							style={{
								fontSize: '2.3em',
								fontWeight: 700,
								marginBottom: -5,
								marginLeft: 10,
							}}
						>
							{' '}
							Title
						</label>
						<input
							type="text"
							onChange={(e) => {
								if (title.length <= 20) {
									setTitle(e.target.value);
								} else {
								}
							}}
							maxLength="20"
							value={title}
							style={{
								width: 300,
								height: '2.5em',
								fontSize: '1.4em',
								padding: 20,
							}}
							placeholder="Enter your title"
						/>
						<div>
							<label
								class="labels-create"
								style={{
									fontSize: '1.5em',
									fontWeight: 700,
									marginBottom: -2,
									marginLeft: 10,
								}}
							>
								Author
							</label>

							<input
								onChange={(e) => {
									if (author.length <= 20) {
										setAuthor(e.target.value);
									} else {
									}
								}}
								maxLength="20"
								value={author}
								style={{ marginRight: 80 }}
								placeholder={`${username}?`}
							/>

							<header className="alert-heading">
								If left blank, the author will default to {username}{' '}
								{getTheAuthor}
							</header>
						</div>
						<div>
							<label
								class="labels-create"
								style={{
									fontSize: '1.5em',
									fontWeight: 700,
									marginBottom: -2,
									marginLeft: 10,
								}}
							>
								Artist
							</label>
							<input
								onChange={(e) => {
									if (artist.length <= 20) {
										setArtist(e.target.value);
									} else {
									}
								}}
								maxLength="20"
								value={artist}
								style={{ marginRight: 80 }}
								placeholder="Who illustrated this?"
							/>
						</div>
					</div>

					<div>
						<label
							class="labels-create"
							style={{
								fontSize: '1.5em',
								fontWeight: 700,
								marginBottom: -2,
								marginLeft: 10,
							}}
						>
							Genre
						</label>
						<input
							onChange={(e) => {
								if (genre.length <= 20) {
									setGenre(e.target.value);
								} else {
								}
							}}
							maxLength="20"
							value={genre}
							style={{ marginRight: 80 }}
							placeholder="What's the genre?"
						/>
						<input
							onChange={(e) => {
								if (genre2.length <= 20) {
									setGenre2(e.target.value);
								} else {
								}
							}}
							maxLength="20"
							value={genre2}
							placeholder="What's the 2nd genre?"
						/>
					</div>
					<div className="mt-5">
						<label
							class="labels-create"
							style={{
								fontSize: '1.5em',
								fontWeight: 700,
								marginBottom: -2,
								marginLeft: 10,
							}}
						>
							Description
						</label>
						<textarea
							type="text"
							onChange={(e) => {
								if (description.length <= 150) {
									setDescription(e.target.value);
								} else {
								}
							}}
							maxLength="150"
							value={description}
							style={{ height: '4em', width: 600 }}
							placeholder="Write a short description of your story here"
						/>
					</div>

					<div style={{ marginTop: 140, alignSelf: 'center' }}>
						<label
							class="labels-create"
							style={{
								fontSize: '2em',
								fontWeight: 700,
								marginBottom: -2,
								marginLeft: 10,
							}}
						>
							Summary
						</label>
						<textarea
							placeholder="Explain your story here!"
							type="text"
							onChange={(e) => {
								if (summary.length <= 300) {
									setSummary(e.target.value);
								} else {
								}
							}}
							maxLength="300"
							value={summary}
							style={{ height: 400, width: 900 }}
						/>
					</div>
					{/* <div>
						<input
							onChange={(e) => {
								setPic(e.target.value);
							}}
						/>
					</div> */}
					{/* <button
						style={{ justifySelf: 'center', alignSelf: 'center' }}
						className="mt-5 buttoncustom2 mb-5"
					> */}
					<button
						type="submit"
						className="mt-5 buttoncustom2 mb-5"
						style={{
							justifySelf: 'center',
							alignSelf: 'center',
							textDecoration: 'none',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						onClick={(e) => {
							if (
								title &&
								genre &&
								genre2 &&
								summary &&
								pic &&
								description &&
								page &&
								artist
							) {
								addNewManga(
									title, // title
									genre, // genre
									genre2, // genre2
									summary, // summary
									pic, // manga cover art
									description, // description
									page, // amount of pages
									getTheAuthor(), // Author
									artist, // artist
									getSlug(), // slug
									[] // an array of files of all their individual manga pages
								);
								history.push('/search');
							} else {
								alert('Please enter in all fields');
							}
						}}
					>
						{' '}
						Submit{' '}
					</button>
					{/* </button> */}
				</form>
			</div>
			{/* {own ? 'You are creating your own' : 'You are not creating your own'} */}
		</div>
	);
}

export default Manga;
