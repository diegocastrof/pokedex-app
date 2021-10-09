import React, { Component } from 'react';

class GlobalErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		console.log(error);
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		// Customized error handling goes here!
		console.log(error, info);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			return (
				<div>
					<h1>Ups... something went wrong!</h1>
				</div>
			);
		}

		return children;
	}
}

export default GlobalErrorBoundary;
