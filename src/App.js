import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb, Cart, Card } from 'react-bootstrap';
function App() {
	return (
		<div className="App">
			<section>
				<nav class="navbarcustom navbar navbar-expand-sm navbar-light">
					<a
						href="index.html"
						class="customlink1 font-weight-bold navbar-brand mr-5"
					></a>

					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavbar"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="collapsibleNavbar">
						<ul class="mr-auto navbar-nav">
							<div class="row">
								<li class="nav-item pl-2">
									<a
										href="create.html"
										class="customlink font-weight-bold nav-link mx-3 text-light"
									>
										Create
									</a>
								</li>
								<li class="nav-item pl-2">
									<a
										href="explore.html"
										class="customlink font-weight-bold nav-link mx-3 text-light"
									>
										Explore
									</a>
								</li>
								<li class="nav-item pl-2">
									<a
										href="account.html"
										class="customlink font-weight-bold nav-link mx-3 text-light"
									>
										Account
									</a>
								</li>
							</div>
						</ul>
						<ul class="navbar-nav">
							<div class="row">
								<li class="nav-item pl-2 mx-4 mt-1">
									<a href="" class="customlink nav-link text-secondary">
										How to
									</a>
								</li>
								<li class="nav-item pl-2 pr-3">
									<a href="" class="nav-link">
										<button class="buttoncustom font-weight-bold">Login</button>
									</a>
								</li>

								<div class="separation-line mt-3"></div>

								<li class="nav-item px-2 mr-4">
									<form class="form-inline" action="/action_page.php">
										<input
											type="search"
											placeholder="Search"
											class="mr-sm-2 pl-3 mt-2 ml-3 search"
										/>
									</form>
								</li>
							</div>
						</ul>
					</div>
				</nav>
			</section>
		</div>
	);
}

export default App;
