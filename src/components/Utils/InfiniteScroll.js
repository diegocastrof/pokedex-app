import React from 'react';
import { Spinner } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfinitScrollComponent = ({
	dataLength,
	label,
	children,
	isFetching = false,
	...props
}) => {
	return (
		<InfiniteScroll
			dataLength={dataLength}
			className="px-1 overflow-hidden"
			loader={
				isFetching && (
					<div className="d-flex w-100 justify-content-center">
						<Spinner animation="border" variant="primary" />
					</div>
				)
			}
			endMessage={
				<p className="text-muted mt-2 py-1" style={{ textAlign: 'center' }}>
					<b>
						There isn't more {dataLength > 0 ? `más ${label}` : label} to show
					</b>
				</p>
			}
			{...props}
		>
			{children}
		</InfiniteScroll>
	);
};

export default InfinitScrollComponent;
