import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Cover from '../images/CoverForManga.png';
import MangaLIVE from '../images/Manga-LIVE.png';

const carouselItems = [
	{
		name: 'manga1',
		src: MangaLIVE,
	},
	{
		name: 'manga2',
		src: Cover,
	},
	{
		name: 'manga3',
		src: MangaLIVE,
	},
];

function Carouselimg() {
	return (
		<Carousel>
			{carouselItems.map((each) => {
				return (
					<Carousel.Item>
						<div style={{ display: 'flex', margin: 'auto' }}>
							<img
								src={each.src}
								className="Carouselnew"
								alt={each.name}
								style={{ margin: 'auto' }}
							/>
						</div>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}

export default Carouselimg;
