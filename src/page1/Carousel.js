import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Cover from '../images/CoverForManga.png';
import MangaLIVE from '../images/Manga-LIVE.png';

function Carouselimg() {
	return (
		// <Carousel className="d-flex Carouselcenter">
		// 	<Carousel.Item className="Carouselcenter">
		// 		<img
		// 			src={Cover}
		// 			className="Carouselimga img-fluid mx-auto images-hero"
		// 			alt="manga1"
		// 			// style={{
		// 			// 	margin: 0,
		// 			// 	position: 'absolute',
		// 			// 	top: '50%',
		// 			// 	left: '50',
		// 			// 	transform: 'translate(-50%, -50%)',
		// 			// }}

		// 			// style={{ width: '25%', margin: 'auto' }}

		// 		/>
		// 	</Carousel.Item>
		// 	<Carousel.Item className="Carouselcenter">
		// 		<img
		// 			src={Cover}
		// 			className="Carouselimga img-fluid mx-auto images-hero"
		// 			alt="manga2"
		// 		/>
		// 	</Carousel.Item>
		// 	<Carousel.Item className="Carouselcenter">
		// 		<img
		// 			src={Cover}
		// 			className="Carouselimga img-fluid mx-auto images-hero"
		// 			alt="manga3"
		// 		/>
		// 	</Carousel.Item>
		// </Carousel>

		<Carousel>
			<Carousel.Item>
				<img src={Cover} className="Carouselnew" alt="Manga1" />
			</Carousel.Item>
			<Carousel.Item>
				<img src={MangaLIVE} className="Carouselnew" alt="Manga2" />
			</Carousel.Item>
			<Carousel.Item>
				<img src={Cover} className="Carouselnew" alt="Manga3" />
			</Carousel.Item>
		</Carousel>
	);
}

export default Carouselimg;
