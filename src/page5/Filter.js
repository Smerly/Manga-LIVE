import React from 'react';
import Create from '../page2/Create';
import Navbar1 from '../Navbar1';
import FilterInfo from '../page2/FilterInfo';
import '../App.css';

function Filter() {
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
							Search Results:
						</h1>
						<div className="row">
							<div className="card m-2 mb-3 p-2 explorebox">
								<FilterInfo />
							</div>
							<div className="card m-2 mb-3 p-2 explorebox"></div>
							<div className="card m-2 mb-3 p-2 explorebox"></div>
							<div className="card m-2 mb-3 p-2 explorebox"></div>
							<div className="card m-2 mb-3 p-2 explorebox"></div>
						</div>

						<div className="row">
							<div className="card m-2 mb-3 p-2 explorebox"></div>
							<div className="card m-2 mb-3 p-2 explorebox"></div>
							<div className="card m-2 mb-3 p-2 explorebox"></div>
							<div className="card m-2 mb-3 p-2 explorebox"></div>
							<div className="card m-2 mb-3 p-2 explorebox"></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Filter;
