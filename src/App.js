import React, { useState } from 'react';

const App =() =>{
	let time = new Date().toLocaleTimeString();
	const [curTime, setTime] = useState(time);

	const UpdateTime = ()=>{
		let time = new Date().toLocaleTimeString();
		setTime(time);
	};

	setInterval(UpdateTime,1000);


	return (
		<>
		<h1> {curTime} </h1>
		</>
		);
};



export default App;