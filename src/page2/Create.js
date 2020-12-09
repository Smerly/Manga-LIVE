import React from 'react';
import Navbar2 from '../Navbar2';

function Create() {
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

			<section>
				<div className="box-sections border">
					<h1 className="h1-text-white h1-text m-5">Are you...</h1>
					<div className="container">
						<div className="column">
							<div className="d-flex align-items-center justify-content-center pt-5">
								<div className="col-sm m-2">
									<a
										className="col-sm customlink3 nav-link m-2 my-5 mx-5"
										style={{ fontSize: 64, fontWeight: 800 }}
										href="#"
									>
										Continuing/Starting a project
									</a>
								</div>
								<div className="col-sm m-2">
									<h2 className="text-dark h1-text">or</h2>
								</div>
								<div className="col-sm m-2">
									<a
										className="col-sm customlink3 nav-link m-2 my-5 mx-5"
										style={{ fontSize: 64, fontWeight: 800 }}
										href="#"
									>
										Collaborating for Others
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
							<a
								className="col-sm customlink3 nav-link m-2 my-5 mx-5"
								style={{ fontSize: 64, fontWeight: 800 }}
								href="#"
							>
								Mangaka/Artist
							</a>
							<a
								className="col-sm customlink3 nav-link m-2 my-5 mx-5"
								style={{ fontSize: 64, fontWeight: 800 }}
								href="#"
							>
								Voice acting
							</a>
							<a
								className="col-sm customlink3 nav-link m-2 my-5 mx-5"
								style={{ fontSize: 64, fontWeight: 800 }}
								href="#"
							>
								Translator
							</a>
						</div>

						<div className="row">
							<a
								className="col-sm customlink3 nav-link m-2 my-5 mx-5"
								style={{ fontSize: 64, fontWeight: 800 }}
								href="#"
							>
								Programmer
							</a>
							<a
								className="col-sm customlink3 nav-link m-2 my-5 mx-5"
								style={{ fontSize: 64, fontWeight: 800 }}
								href="#"
							>
								Writer
							</a>
							<a
								className="col-sm customlink3 nav-link m-2 my-5 mx-5"
								style={{ fontSize: 64, fontWeight: 800 }}
								href="#"
							>
								Other
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
									<a
										href="#"
										className="h1-text-white customlink3 nav-link display-4 ml-5 pl-4 pt-4"
									>
										English
									</a>
									<a
										href="#"
										className="h1-text-white customlink3 nav-link display-4 ml-5 pl-4 pt-4"
									>
										日本語
									</a>
									<a
										href="#"
										className="h1-text-white customlink3 nav-link display-4 ml-5 pl-4 pt-4"
									>
										한국어
									</a>
									<a
										href="#"
										className="h1-text-white customlink3 nav-link display-4 ml-5 pl-4 pt-4"
									>
										中文
									</a>
								</div>

								<div className="column">
									<a
										href="#"
										className="h1-text-white customlink3 nav-link display-4 ml-5 pl-4 pt-4"
									>
										Español
									</a>
									<a
										href="#"
										className="h1-text-white customlink3 nav-link display-4 ml-5 pl-4 pt-4"
									>
										Français
									</a>
									<a
										href="#"
										className="h1-text-white customlink3 nav-link display-4 ml-5 pl-4 pt-4"
									>
										Indonesia
									</a>
									<a
										href="#"
										className="h1-text-white customlink3 nav-link display-4 ml-5 pl-4 pt-4"
									>
										ภาษาไทย
									</a>
								</div>

								<div className="row d-flex align-items-center ml-5 pl-5">
									<a
										className="col-sm customlink3 nav-link m-2 my-5 mx-5"
										style={{ fontSize: 50, fontWeight: 800 }}
										href="#"
									>
										Male
									</a>
									<div className="col-sm m-2">
										<h3 className="text-dark h1-text" style="font-size: 40px">
											or
										</h3>
									</div>
									<a
										className="col-sm customlink3 nav-link m-2 my-5 mx-5"
										style={{ fontSize: 50, fontWeight: 800 }}
										href="#"
									>
										Female
									</a>
									<div className="col-sm m-2">
										<h3
											className="text-dark h1-text"
											style={{ fontSize: 50, fontWeight: 800 }}
										>
											or
										</h3>
									</div>
									<a
										className="col-sm customlink3 nav-link m-2 my-5 mx-5"
										style={{ fontSize: 50, fontWeight: 800 }}
										href="#"
									>
										Other
									</a>
								</div>
							</div>
						</div>
						<button
							className="buttoncustom3 bg-light font-weight-bold ml-5 mt-5 mb-4"
							style={{ width: 170, height: 70 }}
						>
							<h3 style={{ color: '#ffc000', fontWeight: 800 }}>Done</h3>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Create;
