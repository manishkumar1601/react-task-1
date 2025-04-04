import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0);
	const [timer, setTimer] = useState(4);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount(prevState => prevState + 1);
		}, (+(timer) * 1000));

		return () => clearInterval(intervalId);
	}, [timer]);

	function handleDecrement() {
		setCount(prevState => prevState - 1);
	}

	function handleIncrement() {
		setCount(prevState => prevState + 1);
	}

	function handleCounterInputChange(event) {
		setCount(+(event?.target?.value));
	}

	function handleTimerDecrement() {
		setTimer(prevState => prevState - 1);
	}

	function handleTimerIncrement() {
		setTimer(prevState => prevState + 1);
	}

	function handleTimerInputChange(event) {
		setTimer(+(event?.target?.value));
	}

	return (
		<div className='parent-wrapper'>
			<div className="child-wrapper">
				<div className="counter">
					<span>Counter: {count}</span>
				</div>
				<div className="counter-form">
					<div className="row-counter">
						<span style={{ width: '30%', textAlign: 'center' }}>Counter</span>
						<button style={{ width: '25px', height: '25px' }} onClick={handleDecrement}>-</button>
						<input type="number" value={count} onChange={handleCounterInputChange} />
						<button style={{ width: '25px', height: '25px' }} onClick={handleIncrement}>+</button>
					</div>
					<div className="row-counter">
						<span style={{ width: '30%', textAlign: 'center' }}>Auto Increment Timer Input</span>
						<button style={{ width: '25px', height: '25px' }} onClick={handleTimerDecrement}>-</button>
						<input type="number" value={timer} onChange={handleTimerInputChange} />
						<button style={{ width: '25px', height: '25px' }} onClick={handleTimerIncrement}>+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
