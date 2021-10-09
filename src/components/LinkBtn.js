import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LinkBtn = ({ children, variant, to, ...props }) => (
	<Button className="btn" as={Link} to={to} {...props} variant={variant}>
		{children}
	</Button>
);

LinkBtn.propTypes = {
	to: PropTypes.string,
	variant: PropTypes.string,
};

LinkBtn.defaultProps = {
	to: null,
	variant: 'link',
};

export default LinkBtn;
