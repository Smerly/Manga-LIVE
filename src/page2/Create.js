import React from 'react';
import Navbar2 from '../Navbar2';
import '../App.css';
import { useState } from 'react';
function Create() {
	// const checkState = (e) => {
	// 	if ((e = true)) {
	// 		alert('You want to make your own');
	// 	} else {
	// 		alert("You don't want to make your own");
	// 	}
	// };
	const handleSubmit = (e) => {
		alert(own);
		alert(help);
		alert(manga);

		e.preventDefault();
	};

	// const handleChange = (e) => {
	// 	setOwn({
	// 		...own,
	// 		[e.target.id]: e.target.value,
	// 	});
	// };
	const [own, setOwn] = useState(false);
	const [help, setHelp] = useState(false);
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
	const [female, setFemale] = useState(false);
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

			<form onSubmit={handleSubmit}>
				<section>
					<div className="box-sections border">
						<h1 className="h1-text-white h1-text m-5">Are you...</h1>
						<div className="container">
							<div className="column">
								<div className="d-flex align-items-center justify-content-center pt-5">
									<div className="col-sm m-2">
										<input
											checked={own}
											onChange={() => setOwn(!own)}
											type="checkbox"
											className="toggle"
											id="t1"
										/>
										<a
											className="col-sm customlink3 nav-link m-2 my-5 mx-5"
											style={{ fontSize: 64, fontWeight: 800 }}
										>
											<label for="t1" className="cursor">
												{' '}
												Continuing/Starting a story{' '}
											</label>
										</a>
									</div>
									<div className="col-sm m-2">
										<h2 className="text-dark h1-text">or</h2>
									</div>
									<div className="col-sm m-2">
										<input
											checked={help}
											onChange={() => setHelp(!help)}
											type="checkbox"
											className="toggle"
											id="t2"
										/>
										<a
											className="col-sm customlink3 nav-link m-2 my-5 mx-5"
											style={{ fontSize: 64, fontWeight: 800 }}
										>
											<label for="t2" className="cursor">
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
								<input
									checked={manga}
									onChange={() => setManga(!manga)}
									type="checkbox"
									className="toggle col-sm"
									id="t3"
								/>
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t3" className="cursor">
										Mangaka/Artist{' '}
									</label>
								</a>
								<input
									type="checkbox"
									checked={voice}
									onChange={() => setVoice(!voice)}
									className="toggle col-sm"
									id="t4"
								/>
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t4" className="cursor">
										Voice acting{' '}
									</label>
								</a>
								<input
									checked={translate}
									onChange={() => setTranslate(!translate)}
									type="checkbox"
									className="toggle col-sm"
									id="t5"
								/>
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t5" className="cursor">
										Translator{' '}
									</label>
								</a>
							</div>

							<div className="row">
								<input
									type="checkbox"
									checked={program}
									onChange={() => setProgram(!program)}
									className="toggle col-sm"
									id="t6"
								/>
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t6" className="cursor">
										Programmer{' '}
									</label>
								</a>
								<input
									type="checkbox"
									checked={write}
									onChange={() => setWrite(!write)}
									className="toggle col-sm"
									id="t7"
								/>
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t7" className="cursor">
										Writer
									</label>
								</a>
								<input
									checked={other}
									onChange={() => setOther(!other)}
									type="checkbox"
									className="toggle col-sm"
									id="t8"
								/>
								<a
									className="customlink3 nav-link m-2 my-5 mx-5"
									style={{ fontSize: 64, fontWeight: 800 }}
								>
									<label for="t8" className="cursor">
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
										<input
											checked={english}
											onChange={() => setEnglish(!english)}
											type="checkbox"
											className="toggle"
											id="t9"
										/>
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t9" className="cursor">
												English
											</label>
										</a>
										<input
											checked={chinese}
											onChange={() => setChinese(!chinese)}
											type="checkbox"
											className="toggle"
											id="t10"
										/>
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t10" className="cursor">
												日本語
											</label>
										</a>
										<input
											checked={korean}
											onChange={() => setKorean(!korean)}
											type="checkbox"
											className="toggle"
											id="t11"
										/>
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t11" className="cursor">
												한국어
											</label>
										</a>
										<input
											checked={japanese}
											onChange={() => setJapanese(!japanese)}
											type="checkbox"
											className="toggle"
											id="t12"
										/>
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t12" className="cursor">
												中文
											</label>
										</a>
									</div>

									<div className="column">
										<input
											checked={spanish}
											onChange={() => setSpanish(!spanish)}
											type="checkbox"
											className="toggle"
											id="t13"
										/>
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t13" className="cursor">
												Español
											</label>
										</a>
										<input
											checked={french}
											onChange={() => setFrench(!french)}
											type="checkbox"
											className="toggle"
											id="t14"
										/>
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t14" className="cursor">
												Français
											</label>
										</a>
										<input
											checked={indonesia}
											onChange={() => setIndonesia(!indonesia)}
											type="checkbox"
											className="toggle"
											id="t15"
										/>
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t15" className="cursor">
												Indonesia
											</label>
										</a>
										<input
											checked={thai}
											onChange={() => setThai(!thai)}
											type="checkbox"
											className="toggle"
											id="t16"
										/>
										<a className="customlink3 nav-link display-4 ml-5 pl-4 pt-4">
											<label for="t16" className="cursor">
												ภาษาไทย
											</label>
										</a>
									</div>

									<div className="row d-flex align-items-center ml-5 pl-5">
										<input
											checked={male}
											onChange={() => setMale(!male)}
											type="checkbox"
											className="toggle"
											id="t17"
										/>
										<a
											className=" customlink3 nav-link m-2 my-5 mx-5"
											style={{ fontSize: 40, fontWeight: 800 }}
										>
											<label for="t17" className="cursor">
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
										<input
											checked={female}
											onChange={() => setFemale(!female)}
											type="checkbox"
											className="toggle"
											id="t18"
										/>
										<a
											className=" customlink3 nav-link m-2 my-5 mx-5"
											style={{ fontSize: 40, fontWeight: 800 }}
										>
											<label for="t18" className="cursor">
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
										<input
											checked={both}
											onChange={() => setBoth(!both)}
											type="checkbox"
											className="toggle"
											id="t19"
										/>
										<a
											className="customlink3 nav-link m-2 my-5 mx-5"
											style={{ fontSize: 40, fontWeight: 800 }}
										>
											<label for="t19" className="cursor">
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
