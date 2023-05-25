import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase/firebase';

import './App.css';

function Login() {
	const history = useHistory();
	const [show, setShow] = useState(false);
	const [submitting, setSubmitting] = useState('');
	const [formError, setFormError] = useState('');
	const [logged, setLogged] = useState(false);

	const onFormSubmit = async (e) => {
		console.log('dono');
		try {
			// e.preventDefault();
			setFormError('');
			setSubmitting(true);
		} catch (err) {
			console.error(err);
			setFormError(err.toString());
		} finally {
			setSubmitting(false);
		}
	};

	// Auth vars

	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const handleModal = () => {
		setShow(!show);
	};

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
		} catch (error) {
			console.log(error.message);
			alert('Failed to log in, please try again.');
		}
	};

	return (
		<div className="nav-link" style={{ alignSelf: 'center' }}>
			<button
				className="buttoncustom font-weight-bold"
				style={{ outline: 'none' }}
				onClick={() => {
					handleModal();
				}}
			>
				{' '}
				Login
			</button>
			<Modal
				show={show}
				onHide={() => {
					handleModal();
				}}
			>
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
					<form
						onSubmit={(e) => {
							e.preventDefault();
							// login();
							onFormSubmit();
							// handleModal();
							// history.push('/');
						}}
					>
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
									onChange={(e) => {
										setLoginEmail(e.target.value);
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
									onChange={(e) => {
										setLoginPassword(e.target.value);
									}}
								/>
								<div>
									<button
										type="submit"
										className="buttoncustom3 font-weight-bold mt-3"
										style={{ outline: 'none', marginLeft: '2em' }}
										onClick={() => {
											login();
											// onFormSubmit();
											handleModal();
											history.push('/');
										}}
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
							</div>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Login;
