import React from 'react';
import Cover from '../images/CoverForManga.png';
import '../App.css';
import Popular from '../page3/Popular';
function Tops() {
	return (
		<div>
			<section className="mt-5 bg-white">
				<Popular />
			</section>
		</div>
	);
}

export default Tops;

{
	/* <div className="container bg-light d-flex justify-content-center py-5">
					<div className="column">
						<h1 className="h1-text mt-5">Top Comics and Manga</h1>
						<div className="underline row pt-5 mt-5">
							<img src={Cover} style={{ maxWidth: 100, maxHeight: 200 }} />
							<div className="column">
								<h3 className="ml-3">Title of Manga</h3>
								<header className="ml-3">by Author/Artist name</header>
								<header className="ml-3">Contributions:</header>
								<p className="ml-3">
									Voice by: List of people who voice characters
								</p>
								<p className="ml-3">
									Editor/Translator: People who editted and Translated
								</p>
							</div>
						</div>

						<div className="underline row pt-5 mt-5">
							<div className="ml-auto">
								<div className="row fix-margin">
									<div className="column">
										<h3 className="mr-3">Title of Manga</h3>
										<header className="mr-3">by Author/Artist name</header>
										<header className="mr-3">Contributions:</header>
										<p className="mr-3">
											Voice by: List of people who voice characters
										</p>
										<p className="mr-3">
											Editor/Translator: People who editted and Translated
										</p>
									</div>
									<img
										src={Cover}
										style={{ maxWidth: 100, maxHeight: 200 }}
										className="img-fluid"
									/>
								</div>
							</div>
						</div>

						<div className="underline row pt-5 mt-5">
							<img src={Cover} style={{ maxWidth: 100, maxHeight: 200 }} />
							<div className="column">
								<h3 className="ml-3">Title of Manga</h3>
								<header className="ml-3">by Author/Artist name</header>
								<header className="ml-3">Contributions:</header>
								<p className="ml-3">
									Voice by: List of people who voice characters
								</p>
								<p className="ml-3">
									Editor/Translator: People who editted and Translated
								</p>
							</div>
						</div>

						<div className="underline row pt-5 mt-5">
							<div className="ml-auto">
								<div className="row fix-margin">
									<div className="column">
										<h3 className="mr-3">Title of Manga</h3>
										<header className="mr-3">by Author/Artist name</header>
										<header className="mr-3">Contributions:</header>
										<p className="mr-3">
											Voice by: List of people who voice characters
										</p>
										<p className="mr-3">
											Editor/Translator: People who editted and Translated
										</p>
									</div>
									<img
										src={Cover}
										style={{ maxWidth: 100, maxHeight: 200 }}
										className="img-fluid"
									/>
								</div>
							</div>
						</div>

						<div className="underline row pt-5 mt-5">
							<img src={Cover} style={{ maxWidth: 100, maxHeight: 200 }} />
							<div className="column">
								<h3 className="ml-3">Title of Manga</h3>
								<header className="ml-3">by Author/Artist name</header>
								<header className="ml-3">Contributions:</header>
								<p className="ml-3">
									Voice by: List of people who voice characters
								</p>
								<p className="ml-3">
									Editor/Translator: People who editted and Translated
								</p>
							</div>
						</div>
					</div>
				</div> */
}
