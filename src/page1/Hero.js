import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Cover from '../images/CoverForManga.png';
import '../App.css';

function Hero() {
	return (
		<div class="Hero">
			<section className="mb-5 bg-light">
				<div className="jumbotron jumbotron-fluid herocustom p-5 d-flex justify-content-center">
					<div className="container d-flex justify-content-center">
						<div className="row">
							<img
								src={Cover}
								className="img-fluid mx-auto images-hero"
								alt="Example of Successful Manga"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;
