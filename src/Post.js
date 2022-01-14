import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar1 from './Navbar1';
import NavbarExplore from './page3/NavbarExplore';
function Post() {
	const { slug } = useParams();
	const mangas = useSelector((state) => state.mangas);

	let manga;

	mangas.forEach((m) => {
		if (m[1].slug === slug) {
			manga = m[1];
		}
	});
	const postsPage = () => {
		if (manga) {
			return (
				<div>
					<Navbar1 />
					<NavbarExplore />
					<section className="bg-light" style={{ minHeight: 700 }}>
						<div
							className="container p-5"
							style={{
								minHeight: 700,
								backgroundColor: 'white',
								display: 'flex',
								flexDirection: 'row',
							}}
						>
							<div
								className="col-md-6 mr-3"
								style={{ display: 'flex', flexDirection: 'column' }}
							>
								<div className="row">
									<img
										src=""
										placeholder="Cover of Manga"
										height="200px"
										width="200px"
										className="img-resp"
									/>
									<div
										className="px-3"
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
										}}
									>
										<h1
											className="top-header m-3 mb-5"
											style={{
												width: 250,
												height: 60,
												// justifySelf: 'center',
												textAlign: 'center',
											}}
										>
											{manga.title}
										</h1>
										<div
											className="my-2"
											style={{ borderTop: '1px black solid', width: 50 }}
										></div>
										<h4>{manga.genre}</h4>
										<h4>{manga.genre2}</h4>
									</div>
								</div>
								<h5 className="mt-5" style={{ textAlign: 'center' }}>
									{manga.description}
								</h5>

								<button
									className="buttoncustom3 mt-5"
									style={{
										width: 250,
										height: 100,
										alignSelf: 'center',
										justifySelf: 'center',
										textAlign: 'center',
									}}
								>
									<h3 className="font-weight-bold">Begin Reading</h3>
								</button>
							</div>
							<div
								className="col-md-6 ml-3"
								style={{ borderLeft: '1px black solid' }}
							>
								<p className="m-3 bg-light p-5">{manga.summary}</p>
							</div>
						</div>
					</section>
				</div>
			);
		}
	};

	// problems

	// 1. special characters in titles

	// 2. Can't have same title as another title

	return <div>{postsPage()}</div>;
}

export default Post;
