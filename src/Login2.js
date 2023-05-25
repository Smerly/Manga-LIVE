import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Login2() {
	const history = useHistory();
	const [show, setShow] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const [submitting, setSubmitting] = useState('');
	const [formError, setFormError] = useState('');

	const onFormSubmit = async (e) => {
		console.log('dono');
		try {
			e.preventDefault();
			setFormError('');
			setSubmitting(true);
			await fetch(/*POST email + password*/);
		} catch (err) {
			console.error(err);
			setFormError(err.toString());
		} finally {
			setSubmitting(false);
		}
	};

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
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="nav-link">
			<button
				className="buttoncustom3 font-weight-bold"
				style={{ outline: 'none' }}
				onClick={() => {
					handleModal();
				}}
			>
				{' '}
				Login
			</button>
			<Modal show={show} onHide={() => handleModal()}>
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
						onSubmit={() => {
							login();
							history.push('/');
							handleModal();
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
											history.push('/');
											handleModal();
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

export default Login2;
