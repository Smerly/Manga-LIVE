import React from 'react';
import Navbar1 from '../Navbar1';
import '../App.css';
function Account() {
	return (
		<div>
			<Navbar1 />
			<section className="bg-gray">
				<div className="container bg-light p-5 vh200">
					<div
						className="m-5 vh100"
						style={{ backgroundColor: 'white', borderRadius: 5 }}
					>
						<div className="column p-5">
							<div className="row pb-5">
								<img
									src="#"
									alt="Profile Picture"
									className="img-fluid"
									style={{
										minHeight: 200,
										minWidth: 200,
										border: '1px black solid',
									}}
								/>
								<div className="column m-2">
									<h1 className="col-sm font">Naniderawr537</h1>
									<header className="ml-3 font">
										Roles: Illustrator, Writer
									</header>
									<header className="ml-3 mt-4 font">Email:</header>
									<header className="ml-3 font">Account #: 1233418</header>
								</div>
							</div>
							<h1
								className="pt-4 font"
								style={{
									color: '#ffc000',
									borderTop: '1px rgb(168, 168, 168) solid',
								}}
							>
								About me
							</h1>
							<p className="mt-5 font">
								{/* Hi! I am Naniderawr537. I am an anime/manga artist. I also know
								front end languages like HTML, CSS, JS, and extensions like
								Bootstrap and React. If you are interested in hiring me, I will
								be $25 per page of manga(may vary) and $5 per feature added to
								your manga or comic! I look forward to collaborating with you! */}
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
							<h1 className="font my-5 py-5" style={{ color: '#ffc000' }}>
								Works Contributed
							</h1>
							<h2
								className="top-header pt-5 mb-5 pb-4 pl-2"
								style={{
									borderBottom: '1px black solid',
									width: 400,
									color: '#ffc000',
								}}
							>
								Illustrations
							</h2>

							<div className="row">
								<img
									src="#"
									className="col-sm m-3"
									style={{
										minHeight: 200,
										minWidth: 200,
										border: '1px black solid',
									}}
								/>
								<img
									src="#"
									className="col-sm m-3"
									style={{
										minHeight: 200,
										minWidth: 200,
										border: '1px black solid',
									}}
								/>
								<img
									src="#"
									className="col-sm m-3"
									style={{
										minHeight: 200,
										minWidth: 200,
										border: '1px black solid',
									}}
								/>
							</div>
							<h2
								className="top-header pt-5 mb-5 pb-4 pl-2 mt-5"
								style={{
									color: '#ffc000',
									borderBottom: '1px black solid',
									width: 400,
								}}
							>
								Programs
							</h2>
							<div className="row">
								<h2 className="col-sm">
									Some manga name with link, but there is an image that is
									clickable
								</h2>
								<h2 className="col-sm">
									Some manga name with link, but there is an image that is
									clickable
								</h2>
								<h2 className="col-sm">
									Some manga name with link, but there is an image that is
									clickable
								</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Account;
