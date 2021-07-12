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
	console.log(own);
	const [title, setTitle] = useState('');
	const [genre, setGenre] = useState('');
	const [genre2, setGenre2] = useState('');
	const [summary, setSummary] = useState('');
	const [pic, setPic] = useState('Some Pic');
	const [description, setDescription] = useState('');
	const [page, setPage] = useState('3');
	const [author, setAuthor] = useState('');
	const [artist, setArtist] = useState('');

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
						/>
						<input
							onChange={(e) => {
								setGenre2(e.target.value);
							}}
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

					<button
						type="submit"
						onClick={(e) => {
							dispatch(
								addManga(
									title,
									genre,
									genre2,
									summary,
									pic,
									description,
									page,
									author,
									artist
								)
							);
						}}
						className="mt-5 buttoncustom2 mb-5"
						style={{ justifySelf: 'center', alignSelf: 'center' }}
					>
						{' '}
						Submit{' '}
					</button>
				</form>
			</div>
			{/* {own ? 'You are creating your own' : 'You are not creating your own'} */}
		</div>
	);
}

export default Manga;
