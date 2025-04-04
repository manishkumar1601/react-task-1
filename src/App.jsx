import React, { useState, useRef } from 'react'
import './App.css'

function App() {
	const counterRef = useRef(0);
	const inputRef = useRef(0);

	function updateInputValue() {
		if (inputRef) {
			inputRef.current.value = counterRef.current;
		}
	}

	function handleDecrement() {
		counterRef.current = (+counterRef.current) - 1;
		updateInputValue();
	}

	function handleIncrement() {
		counterRef.current = (+counterRef.current) + 1;
		updateInputValue();
	}

	function handleCounterInputChange(event) {
		counterRef.current = +(event?.target?.value);
		updateInputValue();
	}

	return (
		<div className='parent-wrapper'>
			<div className="child-wrapper">
				<div className="counter">
					<span>Counter: {counterRef?.current}</span>
				</div>
				<div className="counter-form">
					<div className="row-counter">
						<span>Counter</span>
						<button style={{ width: '25px', height: '25px' }} onClick={handleDecrement}>-</button>
						<input type="number" ref={inputRef} onChange={handleCounterInputChange} />
						<button style={{ width: '25px', height: '25px' }} onClick={handleIncrement}>+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
