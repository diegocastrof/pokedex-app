import React from 'react';
import { Form } from 'react-bootstrap';

const TextInput = ({ controlId, nameInput, setNameInput }) => {
	const handleOnChange = (e) => {
		setNameInput(e.target.value);
	};

	return (
		<Form.Group className="mb-3" controlId={controlId}>
			<Form.Control
				type="text"
				className="text-input"
				value={nameInput}
				onChange={handleOnChange}
				placeholder="Filter by name..."
			/>
		</Form.Group>
	);
};

export default TextInput;
