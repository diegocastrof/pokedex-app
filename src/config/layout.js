import React from 'react';
import { Route } from 'react-router-dom';
import { Footer, NavTop } from '../components';

const LayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return (
					<div className="content-container">
						<NavTop />
						<div className="content-body">
							<Component {...props} />
						</div>
						<Footer />
					</div>
				);
			}}
		/>
	);
};

export default LayoutRoute;
