import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styled';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Login2 from './Login2';
import Register2 from './Register2';
import { auth } from './firebase/firebase';
import mangaLiveLogo from './images/Manga-LIVE2.png';
import { useResize } from './helpers/useresize'
function Navbar2() {
	const history = useHistory();
	const [user, setUser] = useState({});
	const [toggle, setToggle] = useState(false)
	const [size, setSize] = useState([0, 0]);
	const [showNav, setShowNav] = useState(false);

	const logout = async () => {
		await signOut(auth);
	};
	const hiddenNavbar = () => {
		// if (showNav) {
			return (
				<div>
					<div style={{top: '5.5rem'}} className={toggle ? 'navbar-hidden-slide1 toggled' : 'navbar-hidden-slide1'}></div>
					<div style={{top: '5.5rem'}} className={toggle ? 'navbar-hidden-slide2 toggled' : 'navbar-hidden-slide2'}></div>
					<div style={{top: '5.5rem'}} className={toggle ? 'navbar-hidden toggled' : 'navbar-hidden'}>
						
						<NavLink
							className="text-center customlink font-weight-bold nav-link mx-3"
							whileHover={{ color: 'black' }}
							to={`/create`}
						>
							Create
						</NavLink>
						<NavLink
							className="text-center customlink font-weight-bold nav-link mx-3"
							exact
							to={`/explore`}
						>
							Explore
						</NavLink>
						<NavLink
							href="account.html"
							className="text-center customlink font-weight-bold nav-link mx-3"
							exact
							to={`/Account`}
						>
							Account
						</NavLink>

						<div style={{backgroundColor: 'white', width: '10%', height: 2, margin: '2vh'}}></div>

						{handleUser()}

								{user ? (
									<li
										className="nav-item pl-3 pr-3"
										style={{ alignSelf: 'center' }}
									>
										<button
											onClick={() => {
												logout();
												history.push('/');
											}}
											className="buttoncustom font-weight-bold"
										>
											{' '}
											Log out
										</button>
									</li>
								) : (
									''
								)}
					</div>
				</div>
			);
		// }
	};

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});
	const handleUser = () => {
		if (!user) {
			return (
				<div className="row">
					<li className="nav-item pl-3 pr-3">
						{/* <a href="#" className="nav-link">
			<button className="buttoncustom font-weight-bold">
				Login
			</button>
		</a> */}

						<Login2 />
					</li>

					<li className="nav-item pl-1 pr-5">
						{/* <a href="#" className="nav-link">
			<button className="buttoncustom font-weight-bold">
				Login
			</button>
		</a> */}

						<Register2 />
					</li>
				</div>
			);
		} else if (user) {
			return (
				<div className="center">
					<li className="nav-item pl-3 pr-3">
						<header style={{ fontWeight: 600 }}>{user.email}</header>
					</li>
					{/* <li className="nav-item pl-3 pr-3" style={{ alignSelf: 'center' }}>
						<button onClick={logout} className="buttoncustom font-weight-bold">
							{' '}
							Log out
						</button>
					</li> */}
				</div>
			);
		}
	};
	return (
		<div className="Navbar2">
			<section>
				<nav className="navbarcustom2 navbar navbar-expand-lg navbar-light" style={{ paddingTop: 15, paddingBottom: 15, width: '100%', position: 'fixed' }}>
					<NavLink to={`/`} className="font-weight-bold">
						<img src={mangaLiveLogo} className="logo-link customlink1" />
					</NavLink>

					<button
						className="navbar-toggler"
						// type="button"
						// data-toggle="collapse"
						// data-target="#collapsibleNavbar"
						onClick={() => {
							setToggle(!toggle)
						}}
					>
						{hiddenNavbar()}
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse ml-5" id="collapsibleNavbar">
						<ul className="mr-auto navbar-nav">
							<div className="row">
								<li className="nav-item pl-2">
									<NavLink
										className="customlink2 font-weight-bold nav-link mx-3"
										style={{ color: 'black' }}
										to={`create`}
									>
										Create
									</NavLink>
								</li>
								<li className="nav-item pl-2">
									<NavLink
										className="customlink2 font-weight-bold nav-link mx-3"
										exact
										style={{ color: 'black' }}
										to={`/explore`}
									>
										Explore
									</NavLink>
								</li>
								<li className="nav-item pl-2">
									<NavLink
										className="customlink2 font-weight-bold nav-link mx-3"
										exact
										style={{ color: 'black' }}
										to={`account`}
									>
										Account
									</NavLink>
								</li>
							</div>
						</ul>
						<ul className="navbar-nav">
							<div className="row">
								<li className="nav-item pl-2 mx-4">
									<a
										href="#"
										className="customlink2 nav-link text-secondary"
										style={{ color: 'gray', fontWeight: 700, marginTop: 2 }}
									>
										About MangaLIVE
									</a>
								</li>
								{handleUser()}

								{user ? (
									<li
										className="nav-item pl-3 pr-3"
										style={{ alignSelf: 'center' }}
									>
										<button
											onClick={() => {
												logout();
												history.push('/');
											}}
											className="buttoncustom3 font-weight-bold"
										>
											{' '}
											Log out
										</button>
									</li>
								) : (
									''
								)}

								{/* <div className="separation-line mt-3"></div> */}

								{/* <li className="nav-item px-2 mr-4">
									<form className="form-inline" action="/action_page.php">
										<input
											type="search"
											placeholder="Search (WIP)"
											className="mr-sm-2 pl-3 mt-2 ml-3 search2"
										/>
									</form>
								</li> */}
							</div>
						</ul>
					</div>
				</nav>
				{hiddenNavbar()}
			</section>
		</div> // Dont touch this div or anything beyond here
	);
}

export default Navbar2;
