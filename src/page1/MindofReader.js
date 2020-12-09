import React from 'react';

function MindofReader() {
	return (
		<div className="Hero">
			<section className="mt-5 my-5 bg-gray">
				<div className="container bg-light pb-5">
					<div className="column d-flex justify-content-center">
						<h1 className="h1-text my-4">The Experiences of the Readers</h1>
					</div>
					<div className="embed-responsive embed-responsive-16by9 mb-5">
						<iframe
							className="embed-responsive-item"
							src="https://www.youtube.com/embed/yIQkAVZw9F8"
							allowfullscreen
						></iframe>
					</div>

					<h1 className="h1-text mt-5">A new way of</h1>
					<h1 className="h1-text mt-1">enjoying web</h1>
					<h1 className="h1-text mt-1 mb-5">novels</h1>

					<button className="buttoncustom2 mb-3" href="explore.html">
						Learn more
					</button>
				</div>
			</section>
			;
		</div>
	);
}

export default MindofReader;
