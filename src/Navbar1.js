import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styled';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { auth } from './firebase/firebase';
function Navbar1() {
	const [user, setUser] = useState({});
	const history = useHistory();

	const logout = async () => {
		await signOut(auth);
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

						<Login />
					</li>

					<li className="nav-item pl-1 pr-5">
						{/* <a href="#" className="nav-link">
			<button className="buttoncustom font-weight-bold">
				Login
			</button>
		</a> */}

						<Register />
					</li>
				</div>
			);
		} else if (user) {
			return (
				<div className="row">
					<li className="nav-item pl-3 pr-3">
						<div>
							Welcome back,
							<header>{user.email}</header>
						</div>
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
	// console.log(auth.currentUser);
	return (
		<div className="Navbar1">
			<section style={{ backgroundColor: 'white' }}>
				<nav className="navbarcustom navbar navbar-expand-sm navbar-light">
					<NavLink
						to={`/`}
						className="customlink1 font-weight-bold navbar-brand mr-5"
					></NavLink>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavbar"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="collapsibleNavbar">
						<ul className="mr-auto navbar-nav">
							<div className="row">
								<li className="nav-item pl-2">
									<NavLink
										className="customlink font-weight-bold nav-link mx-3"
										whileHover={{ color: 'black' }}
										to={`/create`}
									>
										Create
									</NavLink>
								</li>
								<li className="nav-item pl-2">
									<NavLink
										className="customlink font-weight-bold nav-link mx-3"
										exact
										to={`/explore`}
									>
										Explore
									</NavLink>
								</li>
								<li className="nav-item pl-2">
									<NavLink
										href="account.html"
										className="customlink font-weight-bold nav-link mx-3"
										exact
										to={`/Account`}
									>
										Account
									</NavLink>
								</li>
							</div>
						</ul>
						<ul className="navbar-nav">
							<div className="row">
								<li className="nav-item pl-2 mx-4 mt-1">
									<a
										href="#"
										className="customlink nav-link text-secondary"
										style={{ fontWeight: 700 }}
										exact
										to="#"
									>
										How to
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
											className="buttoncustom font-weight-bold"
										>
											{' '}
											Log out
										</button>
									</li>
								) : (
									''
								)}

								<div className="separation-line mt-3"></div>

								<li className="nav-item px-2 mr-4">
									<form className="form-inline" action="/action_page.php">
										<input
											type="search"
											placeholder="Search (WIP)"
											className="mr-sm-2 pl-3 mt-2 ml-3 search"
										/>
									</form>
								</li>
							</div>
						</ul>
					</div>
				</nav>
			</section>
		</div> // Dont touch this div or anything beyond here
	);
}

export default Navbar1;
