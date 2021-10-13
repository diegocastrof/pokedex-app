import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';

const handleDefaultMultiValue = (value, defaultValue, defaultMultiValues) => {
	if (defaultValue && value && value === defaultValue)
		return defaultMultiValues;
	return undefined;
};

const findDefaultValue = (value, defaultValue, options, props) => {
	const { isMulti, defaultMultiValues } = props;
	if (isMulti) {
		return handleDefaultMultiValue(value, defaultValue, defaultMultiValues);
	}
	if (
		defaultValue &&
		value &&
		defaultValue !== '' &&
		value !== '' &&
		value === defaultValue
	) {
		const vAttribute = options.filter((e) => defaultValue === e.value);
		return vAttribute[0];
	}
	if (value === '') return null;
	return undefined;
};

const colourStyles = {
	control: (base) => ({
		...base,
		fontSize: '1.3rem',
		backgroundColor: 'white',
		borderRadius: '5rem',
		minHeight: '5rem',
		height: '5rem',
		paddingLeft: '2rem',
		cursor: 'pointer',
	}),
	menu: (base) => ({
		...base,
		fontSize: '1.3rem',
		backgroundColor: '#FFF',
		zIndex: 99999999,
	}),
	option: (base, { isFocused }) => {
		return {
			...base,
			backgroundColor: isFocused ? '#ffdbd0' : 'white',
			color: '#373a3c',
		};
	},
	multiValueLabel: (base) => ({
		...base,
		backgroundColor: '#1f2e4f',
		color: 'white',
		borderBottomLeftRadius: '5px',
		borderTopLeftRadius: '5px',
	}),
	multiValueRemove: (base) => ({
		...base,
		backgroundColor: '#1f2e4f',
		color: 'white',
		borderBottomRightRadius: '5px',
		borderTopRightRadius: '5px',
		transition: '.2s',
		'&:hover': {
			backgroundColor: '#e9e9e9',
			color: '#1f2e4f',
		},
	}),
};

const FormikSelect = ({
	options,
	label,
	name,
	defaultValue,
	value,
	isDisabled,
	...props
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Form.Group controlId={label} className="select-input">
			<Select
				className={`${isOpen ? 'border-on ' : ''}`}
				placeholder="Filter by type..."
				onMenuOpen={() => setIsOpen(true)}
				onMenuClose={() => {
					setIsOpen(false);
				}}
				loadingMessage={() => 'Loading...'}
				noOptionsMessage={() => 'No results'}
				options={options}
				isSearchable
				name={name}
				value={findDefaultValue(value, defaultValue, options, props)}
				isDisabled={isDisabled}
				styles={colourStyles}
				components={{
					IndicatorSeparator: () => null,
				}}
				{...props}
			/>
		</Form.Group>
	);
};

export default FormikSelect;
