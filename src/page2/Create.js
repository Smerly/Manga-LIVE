import React from 'react';
import Navbar2 from '../Navbar2';
import '../App.css';
import { useState } from 'react';
function Create() {
	const [own, setOwn] = useState(false);
	const [help, sethelp] = useState(false);
	const [manga, setManga] = useState(false);
	const [voice, setVoice] = useState(false);
	const [translate, setTranslate] = useState(false);
	const [program, setProgram] = useState(false);
	const [write, setWrite] = useState(false);
	const [other, setOther] = useState(false);
	const [english, setEnglish] = useState(false);
	const [chinese, setChinese] = useState(false);
	const [korean, setKorean] = useState(false);
	const [japanese, setJapanese] = useState(false);
	const [spanish, setSpanish] = useState(false);
	const [french, setFrench] = useState(false);
	const [indonesia, setIndonesia] = useState(false);
	const [thai, setThai] = useState(false);
	const [male, setMale] = useState(false);
	const [female, setQuery] = useState(false);
	const [both, setBoth] = useState(false);

	return (
		<div className="Create">
			<Navbar2 />
			<section>
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
			</section>

			<div className="divider"></div>

			<form>
				<section>
					<div className="box-sections border">
						<h1 className="h1-text-white h1-text m-5">Are you...</h1>
						<div className="container">
							<div className="column">
								<div className="d-flex align-items-center justify-content-center pt-5">
									<div className="col-sm m-2">
										<input type="checkbox" class="toggle" id="t1" />
										<a
											className="col-sm customlink3 nav-link m-2 my-5 mx-5"
											style={{ fontSize: 64, fontWeight: 800 }}
										>
											<label for="t1" class="cursor">
												{' '}
												Continuing/Starting a story{' '}
											</label>
										</a>
									</div>
									<div className="col-sm m-2">
										<h2 className="text-dark h1-text">or</h2>
									</div>
									<div className="col-sm m-2">
										<input type="checkbox" class="toggle" id="t2" />
										<a
											className="col-sm customlink3 nav-link m-2 my-5 mx-5"
											style={{ fontSize: 64, fontWeight: 800 }}
										>
											<label for="t2" class="cursor">
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

				<section>
					<div className="box-sections border" style={{ height: 800 }}>
						<h1 className="h1-text-white h1-text m-5 pb-5">
							Which roles will you be fulfilling?
						</h1>
						<div className="column">
							<div className="row d-flex align-items-center justify-content-center">
								<input type="checkbox" class="toggle col-sm" id="t3" />
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t3" class="cursor">
										Mangaka/Artist{' '}
									</label>
								</a>
								<input type="checkbox" class="toggle col-sm" id="t4" />
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t4" class="cursor">
										Voice acting{' '}
									</label>
								</a>
								<input type="checkbox" class="toggle col-sm" id="t5" />
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t5" class="cursor">
										Translator{' '}
									</label>
								</a>
							</div>

							<div className="row">
								<input type="checkbox" class="toggle col-sm" id="t6" />
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t6" class="cursor">
										Programmer{' '}
									</label>
								</a>
								<input type="checkbox" class="toggle col-sm" id="t7" />
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t7" class="cursor">
										Writer
									</label>
								</a>
								<input type="checkbox" class="toggle col-sm" id="t8" />
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t8" class="cursor">
										Other{' '}
									</label>
								</a>
							</div>
						</div>
					</div>
				</section>

				<div className="divider"></div>

				<section>
					<div className="box-sections border">
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
								<div className="row">
									<div className="column">
										<input type="checkbox" class="toggle" id="t9" />
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t9" class="cursor">
												English
											</label>
										</a>
										<input type="checkbox" class="toggle" id="t10" />
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t10" class="cursor">
												日本語
											</label>
										</a>
										<input type="checkbox" class="toggle" id="t11" />
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t11" class="cursor">
												한국어
											</label>
										</a>
										<input type="checkbox" class="toggle" id="t12" />
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t12" class="cursor">
												中文
											</label>
										</a>
									</div>

									<div className="column">
										<input type="checkbox" class="toggle" id="t13" />
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t13" class="cursor">
												Español
											</label>
										</a>
										<input type="checkbox" class="toggle" id="t14" />
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t14" class="cursor">
												Français
											</label>
										</a>
										<input type="checkbox" class="toggle" id="t15" />
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t15" class="cursor">
												Indonesia
											</label>
										</a>
										<input type="checkbox" class="toggle" id="t16" />
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t16" class="cursor">
												ภาษาไทย
											</label>
										</a>
									</div>

									<div className="row d-flex align-items-center ml-5 pl-5">
										<input type="checkbox" class="toggle" id="t17" />
										<a
											className=" customlink3 nav-link m-2 my-5 mx-5"
											style={{ fontSize: 40, fontWeight: 800 }}
											href="#"
										>
											<label for="t17" class="cursor">
												Male
											</label>
										</a>
										<div className="col-sm m-2">
											<h3
												className="text-dark h1-text"
												style={{ fontSize: 40 }}
											>
												or
											</h3>
										</div>
										<input type="checkbox" class="toggle" id="t18" />
										<a
											className=" customlink3 nav-link m-2 my-5 mx-5"
											style={{ fontSize: 40, fontWeight: 800 }}
											href="#"
										>
											<label for="t18" class="cursor">
												Female
											</label>
										</a>
										<div className="col-sm m-2">
											<h3
												className="text-dark h1-text"
												style={{ fontSize: 50, fontWeight: 800 }}
											>
												or
											</h3>
										</div>
										<input type="checkbox" class="toggle" id="t19" />
										<a
											className="customlink3 nav-link m-2 my-5 mx-5"
											style={{ fontSize: 40, fontWeight: 800 }}
											href="#"
										>
											<label for="t19" class="cursor">
												Both/Other
											</label>
										</a>
									</div>
								</div>
							</div>
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
						</div>
					</div>
				</section>
			</form>
		</div>
	);
}

export default Create;
