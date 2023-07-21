import React from 'react';
import '../App.css';
import stockvid from '../images/stockvid.mp4';
function MindofReader() {
	return (
		<section className="bg-black">
			{/* <div className="column d-flex justify-content-center"> */}
			{/* <h1 className="h1-text my-4">The Experiences of the Readers</h1> */}
			{/* </div> */}
			{/* <div className="embed-responsive embed-responsive-16by9 mb-5"> */}
			<div className="box-in-vid">
				<h1
					className="h1-text mt-5"
					style={{
						color: 'black',
						textShadow: '0 0 3px #ffc000, 0 0 5px #ffc000',
					}}
				>
					A new way of
				</h1>
				<h1
					className="h1-text mt-1"
					style={{
						color: 'black',
						textShadow: '0 0 3px #ffc000, 0 0 5px #ffc000',
					}}
				>
					enjoying web
				</h1>
				<h1
					className="h1-text mt-1 mb-5"
					style={{
						color: 'black',
						textShadow: '0 0 3px #ffc000, 0 0 5px #ffc000',
					}}
				>
					novels
				</h1>

				<button className="buttoncustom2">Learn more</button>
			</div>
			{/* <div className="vid-overlay" /> */}
			<video autoPlay loop muted className="videoxd">
				<source src={stockvid} type="video/mp4" />
				<source
					src="https://media.istockphoto.com/id/1342503133/video/the-artist-draws-anime-comics-on-paper-storyboard-for-the-cartoon-the-illustrator-creates.mp4?s=mp4-640x640-is&k=20&c=P2kgi1QBAFjNWcdnWHGetovzM9DYRp4E09uUK3qprS0="
					type="video/ogg"
				/>
			</video>
		</section>
	);
}

export default MindofReader;
