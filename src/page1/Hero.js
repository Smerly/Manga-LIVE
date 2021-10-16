import React from 'react';
import '../App.css';
import Carouselimg from './Carousel';

function Hero() {
	return (
		<div class="Hero">
			<section className="mb-5 bg-light">
				<div className="jumbotron jumbotron-fluid herocustom p-5 d-flex justify-content-center">
					<div className="container d-flex justify-content-center">
						<div className="row">
							<Carouselimg />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;
