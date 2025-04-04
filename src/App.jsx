import React, { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0);

	function handleDecrement() {
		setCount(prevState => prevState - 1);
	}

	function handleIncrement() {
		setCount(prevState => prevState + 1);
	}

	function handleCounterInputChange(event) {
		setCount(+(event?.target?.value));
	}

	return (
		<div className='parent-wrapper'>
			<div className="child-wrapper">
				<div className="counter">
					<span>Counter: {count}</span>
				</div>
				<div className="counter-form">
					<div className="row-counter">
						<span>Counter</span>
						<button style={{ width: '25px', height: '25px' }} onClick={handleDecrement}>-</button>
						<input type="number" value={count} onChange={handleCounterInputChange} />
						<button style={{ width: '25px', height: '25px' }} onClick={handleIncrement}>+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
