import React from 'react';
import { Form } from 'react-bootstrap';

const FormikInput = ({
	abbr,
	error,
	inputType,
	label,
	labelColor,
	margin,
	placeholder,
	size,
	tooltipId,
	tooltipText,
	touched,
	value,
	...props
}) => {
	return (
		<Form.Group className={margin}>
			{label && (
				<Form.Label className={labelColor || ''}>
					{label} {abbr && <abbr className="text-danger ml-1">*</abbr>}
				</Form.Label>
			)}
			<Form.Control
				size={size}
				placeholder={placeholder}
				type={inputType}
				className={error && touched ? 'is-invalid' : ''}
				value={value}
				{...props}
			/>
			{error && touched && (
				<Form.Text className="text-danger">{error}</Form.Text>
			)}
		</Form.Group>
	);
};

export default FormikInput;
