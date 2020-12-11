import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Login2 extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
		};
	}
	handleModal() {
		this.setState({ show: !this.state.show });
	}

	render() {
		return (
			<div className="nav-link">
				<button
					className="buttoncustom3 font-weight-bold"
					style={{ outline: 'none' }}
					onClick={() => {
						this.handleModal();
					}}
				>
					{' '}
					Login
				</button>
				<Modal show={this.state.show} onHide={() => this.handleModal()}>
					<Modal.Header
						closeButton
						style={{ backgroundColor: '#ffc000', height: 170 }}
					>
						<div className="Column">
							<h2 style={{ fontSize: 35 }} className="loginheader">
								Start Collaborating,
							</h2>
							<h2 style={{ fontSize: 35 }} className="loginheader">
								Creating, and Publishing.
							</h2>
						</div>
					</Modal.Header>
					<Modal.Body style={{ height: 350 }}>
						<h2
							className="top-header mb-5 pb-2 ml-3"
							style={{
								borderBottom: '1px rgb(141, 141, 141) solid',
								width: 250,
								fontWeight: 700,
							}}
						>
							Login:
						</h2>

						<div className="container">
							<div className="column">
								<input
									type="text"
									placeholder="Email"
									name="email"
									required
									className="m-2 col-sm mb-3"
									style={{
										border: 'none',
										borderBottom: '1px rgb(141, 141, 141) solid',
										outline: 'none',
									}}
								/>

								<input
									type="password"
									placeholder="Password"
									name="psw"
									className="m-2 col-sm my-3"
									required
									style={{
										border: 'none',
										borderBottom: '1px rgb(141, 141, 141) solid',
										outline: 'none',
									}}
								/>
								<div>
									<button
										type="submit"
										className="buttoncustom3 font-weight-bold mt-3"
										style={{ outline: 'none' }}
									>
										Login
									</button>
									<label>
										<input
											type="checkbox"
											checked="checked"
											name="remember"
											className="ml-5"
										/>{' '}
										Remember me
									</label>
								</div>
								<h3 className="top-header mt-3" style={{ fontWeight: 700 }}>
									{' '}
									Or...
								</h3>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer className="d-flex justify-content-center">
						<div className="column">
							<h2
								className="top-header mb-5 pb-2"
								style={{
									borderBottom: '1px rgb(141, 141, 141) solid',
									width: 250,
									fontWeight: 700,
								}}
							>
								Login with
							</h2>
							<div className="row">
								<a href="#" className="my-2 mx-5 login-socialfb"></a>

								<a href="#" className="my-2 mx-5 login-socialg"></a>

								<a href="#" className="my-2 mx-5 login-sociall"></a>
							</div>
						</div>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default Login2;
