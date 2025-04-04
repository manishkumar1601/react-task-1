import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0);
	const [timer, setTimer] = useState(4);
	const [incDecAmt, setIncDecAmt] = useState(1);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount(prevState => prevState + incDecAmt);
		}, (+(timer) * 1000));

		return () => clearInterval(intervalId);
	}, [timer, incDecAmt]);

	function handleDecrement() {
		setCount(prevState => prevState - incDecAmt);
	}

	function handleIncrement() {
		setCount(prevState => prevState + incDecAmt);
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

	function handleAmtDecrement() {
		setIncDecAmt(prevState => prevState - 1);
	}

	function handleAmtIncrement() {
		setIncDecAmt(prevState => prevState + 1);
	}

	function handleAmtInputChange(event) {
		setIncDecAmt(+(event?.target?.value));
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
					<div className="row-counter">
						<span style={{ width: '30%', textAlign: 'center' }}>Increment Decrement Amount Input</span>
						<button style={{ width: '25px', height: '25px' }} onClick={handleAmtDecrement}>-</button>
						<input type="number" value={incDecAmt} onChange={handleAmtInputChange} />
						<button style={{ width: '25px', height: '25px' }} onClick={handleAmtIncrement}>+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
