import React from 'react';
import '../App.css';
import stockvid from '../images/stockvid.mp4';
import stockvid2 from '../images/stockvid2.mp4';
function MindofReader() {
	return (
		<section className="bg-black">
			{/* <div className="column d-flex justify-content-center"> */}
			{/* <h1 className="h1-text my-4">The Experiences of the Readers</h1> */}
			{/* </div> */}
			{/* <div className="embed-responsive embed-responsive-16by9 mb-5"> */}
			<div className="box-in-vid mt-5">
				<h1
					className="h1-text mt-5"
					style={{
						color: 'black',
						textShadow: '0 0 3px #ffc000, 0 0 5px #ffc000',
					}}
				>
					A new way of
					<br />
					enjoying web
					<br />
					novels
				</h1>
				{/* <h1
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
				</h1> */}

				<button className="buttoncustom2">Learn more</button>
			</div>
			{/* <div className="vid-overlay" /> */}
			<video autoPlay loop muted className="videoxd">
				{/* <source src={stockvid2} type="video/mp4" /> */}
				<source src={stockvid} type="video/ogg" />
			</video>
		</section>
	);
}

export default MindofReader;
