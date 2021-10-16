import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Cover from '../images/CoverForManga.png';
import MangaLIVE from '../images/Manga-LIVE.png';

function Carouselimg() {
	return (
		<Carousel>
			<Carousel.Item>
				{/* <img src={Cover} className="Carouselnew" alt="Manga1" /> */}
				<img src={MangaLIVE} className="Carouselnew" alt="Manga2" />
			</Carousel.Item>
			<Carousel.Item>
				<img src={MangaLIVE} className="Carouselnew" alt="Manga2" />
			</Carousel.Item>
			<Carousel.Item>
				{/* <img src={Cover} className="Carouselnew" alt="Manga3" /> */}
				<img src={MangaLIVE} className="Carouselnew" alt="Manga2" />
			</Carousel.Item>
		</Carousel>
	);
}

export default Carouselimg;
