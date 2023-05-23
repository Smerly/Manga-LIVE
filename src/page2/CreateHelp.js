import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Create from './Create';

function CreateHelp(props) {
	const { show, handleModal } = props;
	return (
		<Modal show={show} onHide={() => handleModal()}>
			<Modal.Header
				className="border-0 column-flex"
				style={{ backgroundColor: '#ffc000', height: 500 }}
			>
				<button
					className="modal-closer1"
					style={{ marginLeft: 'auto' }}
					onClick={() => handleModal()}
				>
					{' '}
				</button>

				<h1
					className="h1-text-white"
					style={{
						fontSize: '3em',
						padding: 20,
						// WebkitTextStroke: '1px black',
						textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
					}}
				>
					{' '}
					Need Help?
				</h1>

				<header
					className="h1-text-white"
					style={{
						marginLeft: 'auto',
						marginRight: 'auto',
						marginBottom: 'auto',
						fontSize: '1.5em',
						padding: 20,
					}}
				>
					Here, you can filter what type of work you are looking by listing your
					skillset and desired roles!
				</header>
			</Modal.Header>
			<Modal.Footer
				className="border-0"
				style={{ backgroundColor: '#ffc000' }}
			></Modal.Footer>
		</Modal>
	);
}

export default CreateHelp;
