import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb, Cart, Card } from 'react-bootstrap';
import styled from 'styled-components';
import './styled';
import { NavLink } from 'react-router-dom';

function Navbar2() {
	return (
		<div className="Navbar2">
			<section>
				<nav className="navbarcustom2 navbar navbar-expand-sm navbar-light">
					<NavLink
						to={`/`}
						className="customlink4 font-weight-bold navbar-brand mr-5"
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
								<li className="nav-item pl-2 mx-4 mt-1">
									<a href="#" className="customlink nav-link text-secondary">
										How to
									</a>
								</li>
								<li className="nav-item pl-2 pr-3">
									<a href="#" className="nav-link">
										<button className="buttoncustom3 font-weight-bold">
											Login
										</button>
									</a>
								</li>

								<div className="separation-line mt-3"></div>

								<li className="nav-item px-2 mr-4">
									<form className="form-inline" action="/action_page.php">
										<input
											type="search"
											placeholder="Search"
											className="mr-sm-2 pl-3 mt-2 ml-3 search2"
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

export default Navbar2;
