import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { formatTime } from '../services/utils';

const TimeSelector = ({ setFieldValue, setIsDisabled }) => {
	const [timer, setTimer] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [showPause, setShowPause] = useState(false);
	const countRef = useRef(null);

	const buttonStartMessage = isRunning ? 'Continue' : 'Start';

	const handleRunClock = (e) => {
		e.preventDefault();
		setIsRunning(true);
		setShowPause(true);
		countRef.current = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);
	};

	const handlePauseClock = (e) => {
		e.preventDefault();
		clearInterval(countRef.current);
		setShowPause(false);
	};

	const handleResetClock = (e) => {
		e.preventDefault();
		clearInterval(countRef.current);
		setIsRunning(false);
		setShowPause(false);
		setTimer(0);
		setFieldValue('time[time]', '');
	};

	const handleChangeTime = () => {
		setIsDisabled(showPause || !isRunning);
		if (timer) {
			setFieldValue('time[time]', formatTime(timer));
		}
	};

	useEffect(handleChangeTime, [isRunning, showPause]);

	return (
		<>
			<p data-testid="timer" className="text-center mt-5 lead font-weight-bold">
				{formatTime(timer)}
			</p>
			<Row className="mb-4">
				<Col className="d-flex justify-content-around">
					{!isRunning || !showPause ? (
						<Button onClick={handleRunClock}>{buttonStartMessage}</Button>
					) : (
						<Button onClick={handlePauseClock}>Pause</Button>
					)}
					<Button onClick={handleResetClock}>Reset</Button>
				</Col>
			</Row>
		</>
	);
};

export default TimeSelector;
