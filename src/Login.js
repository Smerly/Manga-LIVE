import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase/firebase';

import './App.css';

function Login() {
	const history = useHistory();
	const [show, setShow] = useState(false);

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
			console.log(user);
		} catch (error) {
			console.log(error.message);
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
				{/* <Modal.Footer className="d-flex justify-content-center">
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
				</Modal.Footer> */}
			</Modal>
		</div>
	);
}

export default Login;
