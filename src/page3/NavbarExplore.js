import React from 'react';
import '../App.css';
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
							<a
								href="#"
								class="customlink2 nav-link py-2"
								style={{ fontSize: 25, fontWeight: 550 }}
							>
								Popular
							</a>
						</li>
						<li className="nav-item">
							<a
								href="#"
								className="customlink2 nav-link py-2"
								style={{ fontSize: 25, fontWeight: 550 }}
							>
								Genre
							</a>
						</li>
						<li class="nav-item">
							<a
								href="#"
								className="customlink2 nav-link py-2"
								style={{ fontSize: 25, fontWeight: 550 }}
							>
								Weekly
							</a>
						</li>
						<li class="nav-item">
							<a
								href="#"
								className="customlink2 nav-link py-2"
								style={{ fontSize: 25, fontWeight: 550 }}
							>
								Recommended
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</section>
	);
}
export default NavbarExplore;
