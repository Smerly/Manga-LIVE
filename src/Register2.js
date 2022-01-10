import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Modal from 'react-bootstrap/Modal';
import { auth } from './firebase/firebase';

function Register2() {
	const [show, setShow] = useState(false);
	const history = useHistory();

	// Auth vars

	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');

	const handleModal = () => {
		setShow(!show);
	};

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
		} catch (error) {
			console.log(error.message);
			alert('That is not a real email!');
		}
	};

	return (
		<div className="nav-link">
			<button
				className="buttoncustom3 font-weight-bold"
				style={{ outline: 'none', width: 95 }}
				onClick={() => {
					handleModal();
				}}
			>
				{' '}
				Register
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
					<h2
						className="top-header mb-5 pb-2 ml-3"
						style={{
							borderBottom: '1px rgb(141, 141, 141) solid',
							width: 250,
							fontWeight: 700,
						}}
					>
						Register:
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
									setRegisterEmail(e.target.value);
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
									setRegisterPassword(e.target.value);
								}}
							/>
							<div>
								<button
									type="submit"
									className="buttoncustom3 font-weight-bold mt-3"
									style={{ outline: 'none' }}
									onClick={() => {
										register();
										history.push('/');
										handleModal();
									}}
								>
									Register
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

export default Register2;
