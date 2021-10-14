import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addManga } from './actions';
import Navbar1 from './Navbar1';
import { useSelector } from 'react-redux';
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

import {
	writeManga,
	addNewManga,
	readSingleManga,
	listenToManga,
	cancelMyListenerAtAppropriateTime,
	queryForManga,
} from './firebase/firebase';
function Manga() {
	const dispatch = useDispatch();
	const {
		own,
		help,
		manga,
		voice,
		translate,
		program,
		write,
		other,
		english,
		chinese,
		korean,
		japanese,
		spanish,
		french,
		indonesia,
		thai,
		male,
		female,
		both,
	} = useSelector((state) => {
		return state.filters;
	});
	const [title, setTitle] = useState('');
	const [genre, setGenre] = useState('');
	const [genre2, setGenre2] = useState('');
	const [summary, setSummary] = useState('');
	const [pic, setPic] = useState('Some Pic');
	const [description, setDescription] = useState('');
	const [page, setPage] = useState('3');
	const [author, setAuthor] = useState('');
	const [artist, setArtist] = useState('');

	// if (true) {
	// writeManga(
	// 	'some title',
	// 	'some genre',
	// 	'some second genre',
	// 	'some summary',
	// 	'some pic',
	// 	'some description',
	// 	'some amount of pages',
	// 	'some author',
	// 	'some artist'
	// );

	// addNewManga(
	// 	'some title',
	// 	'some genre',
	// 	'some second genre',
	// 	'some summarylol',
	// 	'some pic',
	// 	'some description',
	// 	'some amount of pages',
	// 	'some author',
	// 	'some artist'
	// );
	// console.log('done!');
	// }

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
								setTitle(e.target.value);
							}}
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
									setAuthor(e.target.value);
								}}
								style={{ marginRight: 80 }}
								placeholder="Who wrote the story?"
							/>
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
									setArtist(e.target.value);
								}}
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
								setGenre(e.target.value);
							}}
							style={{ marginRight: 80 }}
							placeholder="What's the genre?"
						/>
						<input
							onChange={(e) => {
								setGenre2(e.target.value);
							}}
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
								setDescription(e.target.value);
							}}
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
								setSummary(e.target.value);
							}}
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
					<NavLink
						to={`search`}
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
							addNewManga(
								title,
								genre,
								genre2,
								summary,
								pic,
								description,
								page,
								author,
								artist
							);
						}}
					>
						{' '}
						Submit{' '}
					</NavLink>
					{/* </button> */}
				</form>
			</div>
			{/* {own ? 'You are creating your own' : 'You are not creating your own'} */}
		</div>
	);
}

export default Manga;
