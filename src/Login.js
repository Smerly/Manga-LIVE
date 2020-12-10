import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { render } from '@testing-library/react';
import './App.css';

class Login extends Component {
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
					className="buttoncustom font-weight-bold"
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
							<h2 className="loginheader">Start Collaborating,</h2>
							<h2 className="loginheader">Creating, and Publishing.</h2>
						</div>
					</Modal.Header>
					<Modal.Body>Hi , React modal is here</Modal.Body>
					<Modal.Footer></Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default Login;
