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
						<div className="container">
							<h1>{manga.title}</h1>
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
