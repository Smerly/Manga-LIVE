import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb, Cart, Card } from 'react-bootstrap';
import styled from 'styled-components';
import './styled';

function Navbar1() {
	return (
		<div className="Navbar1">
			<section>
				<nav className="navbarcustom navbar navbar-expand-sm navbar-light">
					<a
						href="index.html"
						className="customlink1 font-weight-bold navbar-brand mr-5"
					></a>

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
									<a
										href="create.html"
										className="customlink font-weight-bold nav-link mx-3"
										whileHover={{ color: 'black' }}
									>
										Create
									</a>
								</li>
								<li className="nav-item pl-2">
									<a
										href="explore.html"
										className="customlink font-weight-bold nav-link mx-3"
									>
										Explore
									</a>
								</li>
								<li className="nav-item pl-2">
									<a
										href="account.html"
										className="customlink font-weight-bold nav-link mx-3"
									>
										Account
									</a>
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
									>
										How to
									</a>
								</li>
								<li className="nav-item pl-2 pr-3">
									<a href="#" className="nav-link">
										<button className="buttoncustom font-weight-bold">
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
