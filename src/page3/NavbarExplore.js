import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
function NavbarExplore() {
	return (
		<section>
			<nav className="navbar navbar-expand-sm navbar-light bg-gray">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavbar"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavbar">
					<ul className="navbar-nav nav-fill w-100">
						<li className="nav-item">
							<Link
								to={`/explore`}
								class="customlink2 nav-link py-2"
								style={{ fontSize: 25, fontWeight: 550 }}
							>
								Popular
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to={`/explore`}
								className="customlink2 nav-link py-2"
								style={{ fontSize: 25, fontWeight: 550 }}
							>
								Genre
							</Link>
						</li>
						<li class="nav-item">
							<Link
								to={`/explore`}
								className="customlink2 nav-link py-2"
								style={{ fontSize: 25, fontWeight: 550 }}
							>
								Weekly
							</Link>
						</li>
						<li class="nav-item">
							<Link
								to={`/explore`}
								className="customlink2 nav-link py-2"
								style={{ fontSize: 25, fontWeight: 550 }}
							>
								Recommended
							</Link>
						</li>
						<li class="nav-item">
							<Link
								to={`/search`}
								className="customlink2 nav-link py-2"
								style={{ fontSize: 25, fontWeight: 550 }}
							>
								Search
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</section>
	);
}
export default NavbarExplore;
