import React from 'react';
import Logo from './images/Manga-LIVE.png';

const borderRadius = { borderRadius: '60px' };

function Footer() {
	return (
		<section className="bg-gray">
			<div className="container" style={{ backgroundColor: '#ffc000' }}>
				<div className="footer-page">
					<div className="d-flex justify-content-center p-5">
						<a
							href="#"
							className="customlink"
							style={{ textDecoration: 'none' }}
						>
							<h4 className="mx-3">About</h4>
						</a>

						<div className="separation-line mt-2"></div>

						<a
							href="#"
							className="customlink"
							style={{ textDecoration: 'none' }}
						>
							<h4 className="mx-3">Help</h4>
						</a>

						<div className="separation-line mt-2"></div>

						<form>
							<select className="mx-4 custom-select" style={borderRadius}>
								<option value="0">English</option>
								<option value="1">中文 (繁體)</option>
								<option value="2">ภาษาไทย</option>
								<option value="3">Indonesia</option>
								<option value="4">Español</option>
								<option value="5">Français</option>
							</select>
						</form>
					</div>
				</div>
			</div>

			<div className="container" style={{ backgroundColor: '#e6e6e6' }}>
				<div className="footer-page">
					<div className="d-flex justify-content-center p-5">
						<img src={Logo} style={{ width: '20%' }} />
					</div>
				</div>
			</div>

			<div className="container" style={{ backgroundColor: '#e6e6e6' }}>
				<div className="footer-page">
					<div className="d-flex justify-content-center">
						<header>© 2020 Copyright Ernest Cheung | Manga LIVE</header>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;
