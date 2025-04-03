import React, { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='parent-wrapper'>
			<div className="child-wrapper">
				<div className="inner-wrapper">
					<div className="counter-section">
						<h1>Counter: {count}</h1>
					</div>
					<div className="counter-form"></div>
				</div>
			</div>
		</div>
	)
}

export default App
