import React from 'react';
import CREATEREQ from './CREATEREQ.json';
import Navbar1 from '../Navbar1';

function CreateResult() {
	return (
		<div>
			<Navbar1 />
			<section className="bg-light" style={{ minHeight: 700 }}>
				<div className="container">
					<div className="column pb-5 mb-5" style={{ minHeight: 800 }}>
						<h1
							className="top-header pt-5 mb-5"
							style={{ borderBottom: '1px black solid', width: 400 }}
						>
							Requests
						</h1>{' '}
						<div className="row" style={{ listStyleType: 'none' }}>
							{CREATEREQ.map((val, key) => (
								<li key={key}>
									<div className="card m-2 mb-3 p-2 listbox">
										<div className="column">
											<div className="col-sm mb-2" style={{ color: 'black' }}>
												<h3>{val.mangaName}</h3>
											</div>
											<div className="col-sm mb-2" style={{ color: 'black' }}>
												{val.languageReq}
											</div>
											<div className="col-sm mb-2" style={{ color: 'black' }}>
												{val.roles}
											</div>
										</div>
									</div>
								</li>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default CreateResult;
