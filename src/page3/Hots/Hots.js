import React from 'react';
import '../../App.css';
function Hots() {
	return (
		<div className="container">
			<div className="column pb-5 mb-5" style={{ minHeight: 800 }}>
				<h1
					className="top-header pt-5 mb-5"
					style={{ borderBottom: '1px black solid', width: 400 }}
				>
					Hot this Week
				</h1>
				<div className="row">
					<div className="card m-2 mb-3 p-2 explorebox"></div>
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
	);
}
export default Hots;
