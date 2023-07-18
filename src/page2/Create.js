import '../App.css';
import React, { useEffect } from 'react';
import Navbar2 from '../Navbar2';
import CreateHelp from './CreateHelp';
import '../App.css';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';
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
} from '../actions';
import { useDispatch, useSelector } from 'react-redux';

function Create() {
	const [show, setShow] = useState(false);
	const [smallWindow, setSmallWindow] = useState(window.innerWidth);
	const handleModal = () => {
		setShow(!show);
	};
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
	} = useSelector((state) => state.filters);
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const history = useHistory();

	const handleMakePost = () => {
		if (auth.currentUser) {
			history.push('/mangacreating');
		} else {
			alert('You have to login to make posts.');
		}
	};
	useEffect(() => {
		console.log('changed');
	}, [window.innerWidth]);

	const checkHover = (item) => {
		if (item === true) {
			console.log(`${item}, lighter black`);
			return 'create-selection2 cursor';
		} else {
			console.log('darker white');
			return 'create-selection1 cursor';
		}
		return 'cursor';
	};

	return (
		<div className="Create">
			<Navbar2 />
			<CreateHelp show={show} handleModal={handleModal} />
			{/* <section>
				<div className="box-sections border">
					<div className="container">
						<h1
							className="font h1-text-white mt-5 pt-5"
							style={{ fontSize: 64, fontWeight: 800 }}
						>
							Here, you can filter what type of work you are looking by listing
							your skillset and intentions.

						</h1>
					</div>
				</div>
			</section> */}

			{/* {own.toString()} */}

			<form onSubmit={handleSubmit}>
				<section>
					<div className="box-sections border">
						<h1 className="h1-text-white h1-text m-5 row-flex">
							Are you...{' '}
							<button
								className="help buttoncustom center"
								style={{
									marginLeft: 'auto',
									width: '2.5em',
									height: '2.5em',
									borderRadius: '0.5em',
								}}
								onClick={() => handleModal()}
							>
								?
							</button>
						</h1>
						{/* Purpose */}
						<div className="container">
							<div className="column">
								<div className="d-flex align-items-center justify-content-center pt-5">
									<div className="col-sm m-2">
										<input
											checked={own}
											onChange={(e) => dispatch(setOwn(e.target.checked))}
											type="checkbox"
											className="toggle"
											id="t1"
										/>

										<a className="col-sm create-responsive customlink3 nav-link m-2 my-5">
											<label for="t1" className={checkHover(own)}>
												{' '}
												Starting a story{' '}
											</label>
										</a>
									</div>
									<div className="col-sm">
										<h2
											className="create-responsive text-dark h1-text"
											style={{ textAlign: 'center' }}
										>
											or
										</h2>
									</div>
									<div className="col-sm m-2">
										<input
											checked={help}
											onChange={(e) => dispatch(setHelp(e.target.checked))}
											type="checkbox"
											className="toggle"
											id="t2"
										/>

										<a className="col-sm customlink3 create-responsive nav-link m-2 my-5">
											<label
												style={{ wordWrap: 'break-word' }}
												for="t2"
												className={checkHover(help)}
											>
												{' '}
												Collaborating for others{' '}
											</label>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="divider"></div>

				{/* Roles */}
				<section>
					<div className="box-sections border" style={{ minHeight: 800 }}>
						<h1 className="h1-text-white h1-text m-5 pb-5">
							Which roles will you be fulfilling?
						</h1>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								flexWrap: 'wrap',
								justifyContent: 'space-evenly',
							}}
						>
							<div className="column">
								<input
									type="checkbox"
									checked={manga}
									onChange={(e) => dispatch(setManga(e.target.checked))}
									className="toggle col-sm"
									id="t3"
								/>
								<a className="customlink3 create-responsive nav-link m-2 my-5">
									<label for="t3" className={checkHover(manga)}>
										Mangaka/Artist{' '}
									</label>
								</a>

								{/* <input
									type="checkbox"
									checked={voice}
									onChange={(e) => dispatch(setVoice(e.target.checked))}
									className="toggle col-sm"
									id="t100"
								/>
								<a className="customlink3 create-responsive nav-link m-2 my-5">
									<label for="t100" className={checkHover(voice)}>
										extra
									</label>
								</a> */}

								<input
									type="checkbox"
									checked={voice}
									onChange={(e) => dispatch(setVoice(e.target.checked))}
									className="toggle col-sm"
									id="t4"
								/>
								<a className="customlink3 create-responsive nav-link m-2 my-5">
									<label for="t4" className={checkHover(voice)}>
										Voice acting{' '}
									</label>
								</a>

								<input
									checked={translate}
									onChange={(e) => dispatch(setTranslate(e.target.checked))}
									type="checkbox"
									className="toggle col-sm"
									id="t5"
								/>
								<a className="customlink3 create-responsive nav-link m-2 my-5">
									<label for="t5" className={checkHover(translate)}>
										Translator{' '}
									</label>
								</a>
							</div>
							<div className="column">
								<input
									type="checkbox"
									checked={program}
									onChange={(e) => dispatch(setProgram(e.target.checked))}
									className="toggle col-sm"
									id="t6"
								/>
								<a className="customlink3 create-responsive nav-link m-2 my-5">
									<label for="t6" className={checkHover(program)}>
										Programmer{' '}
									</label>
								</a>{' '}
								<input
									type="checkbox"
									checked={write}
									onChange={(e) => dispatch(setWrite(e.target.checked))}
									className="toggle col-sm"
									id="t7"
								/>
								<a className="customlink3 create-responsive nav-link m-2 my-5">
									<label for="t7" className={checkHover(write)}>
										Writer
									</label>
								</a>
								<input
									checked={other}
									onChange={(e) => dispatch(setOther(e.target.checked))}
									type="checkbox"
									className="toggle col-sm"
									id="t8"
								/>
								<a className="customlink3 create-responsive nav-link m-2 my-5">
									<label for="t8" className={checkHover(other)}>
										Other
									</label>
								</a>
							</div>
						</div>
					</div>
				</section>

				<div className="divider"></div>

				<section>
					<div className="box-sections">
						<div className="column">
							<div className="column">
								<h2
									className="display-4 h1-text-white pb-5 ml-5 p-5"
									style={{
										fontWeight: 800,
										fontSize: 45,
										width: 480,
										borderBottom: '1 black solid',
									}}
								>
									Languages Fluent
								</h2>
								<div className="responsive-3rd">
									<div className="column">
										<input
											checked={english}
											onChange={(e) => dispatch(setEnglish(e.target.checked))}
											type="checkbox"
											className="toggle"
											id="t9"
										/>
										<a className="customlink3 create-responsive nav-link ml-5 pl-4 pt-4">
											<label for="t9" className={checkHover(english)}>
												English
											</label>
										</a>
										<input
											checked={chinese}
											onChange={(e) => dispatch(setChinese(e.target.checked))}
											type="checkbox"
											className="toggle"
											id="t10"
										/>
										<a className="customlink3 create-responsive nav-link ml-5 pl-4 pt-4">
											<label for="t10" className={checkHover(chinese)}>
												日本語
											</label>
										</a>
										<input
											checked={korean}
											onChange={(e) => dispatch(setKorean(e.target.checked))}
											type="checkbox"
											className="toggle"
											id="t11"
										/>
										<a className="customlink3 create-responsive nav-link ml-5 pl-4 pt-4">
											<label for="t11" className={checkHover(korean)}>
												한국어
											</label>
										</a>
										<input
											checked={japanese}
											onChange={(e) => dispatch(setJapanese(e.target.checked))}
											type="checkbox"
											className="toggle"
											id="t12"
										/>
										<a className="customlink3 create-responsive nav-link ml-5 pl-4 pt-4">
											<label for="t12" className={checkHover(japanese)}>
												中文
											</label>
										</a>
									</div>

									<div className="column mr-5">
										<input
											checked={spanish}
											onChange={(e) => dispatch(setSpanish(e.target.checked))}
											type="checkbox"
											className="toggle"
											id="t13"
										/>
										<a className="customlink3 create-responsive nav-link ml-5 pl-4 pt-4">
											<label for="t13" className={checkHover(spanish)}>
												Español
											</label>
										</a>
										<input
											checked={french}
											onChange={(e) => dispatch(setFrench(e.target.checked))}
											type="checkbox"
											className="toggle"
											id="t14"
										/>
										<a className="customlink3 create-responsive nav-link ml-5 pl-4 pt-4">
											<label for="t14" className={checkHover(french)}>
												Français
											</label>
										</a>
										<input
											checked={indonesia}
											onChange={(e) => dispatch(setIndonesia(e.target.checked))}
											type="checkbox"
											className="toggle"
											id="t15"
										/>
										<a className="customlink3 create-responsive nav-link ml-5 pl-4 pt-4">
											<label for="t15" className={checkHover(indonesia)}>
												Indonesia
											</label>
										</a>
										<input
											checked={thai}
											onChange={(e) => dispatch(setThai(e.target.checked))}
											type="checkbox"
											className="toggle"
											id="t16"
										/>
										<a className="customlink3 create-responsive nav-link ml-5 pl-4 pt-4">
											<label for="t16" className={checkHover(thai)}>
												ภาษาไทย
											</label>
										</a>
									</div>
									<div
										className="column pb-5 mt-5 pt-5"
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
										}}
									>
										<h2
											className="display-4 h1-text-white"
											style={{
												fontWeight: 800,
												fontSize: 45,
												borderBottom: '1 black solid',
											}}
										>
											Gender
										</h2>

										<div className="responsive-gender">
											<input
												checked={male}
												onChange={(e) => dispatch(setMale(e.target.checked))}
												type="checkbox"
												className="toggle"
												id="t17"
											/>
											<a className="customlink3 create-responsive2 nav-link m-2">
												<label for="t17" className={checkHover(male)}>
													Male
												</label>
											</a>

											<div className="">
												<h2 className="create-responsive2 text-dark h1-text">
													or
												</h2>
											</div>

											<input
												checked={female}
												onChange={(e) => dispatch(setFemale(e.target.checked))}
												type="checkbox"
												className="toggle"
												id="t18"
											/>
											<a className="customlink3 create-responsive2 nav-link m-2">
												<label for="t18" className={checkHover(female)}>
													Female
												</label>
											</a>

											<div className="">
												<h2 className="create-responsive2 text-dark h1-text">
													or
												</h2>
											</div>

											<input
												checked={both}
												onChange={(e) => dispatch(setBoth(e.target.checked))}
												type="checkbox"
												className="toggle"
												id="t19"
											/>
											<a className="customlink3 create-responsive2 nav-link m-2 ">
												<label for="t19" className={checkHover(both)}>
													Both/Other
												</label>
											</a>
										</div>
									</div>
								</div>
							</div>

							<Link
								// to={`/mangacreating`}
								onClick={handleMakePost}
							>
								<input
									type="submit"
									value="Done"
									className="buttoncustom3 bg-light font-weight-bold ml-5 mt-5 mb-4"
									style={{
										width: 170,
										height: 70,
										color: '#ffc000',
										fontWeight: 800,
									}}
								/>
							</Link>
						</div>
					</div>
				</section>
			</form>
		</div>
	);
}

export default Create;
