import React from 'react';

import Calendar from './components/Calendar';

import './App.css';

const App = () => {

	const now = new Date(2020, 5, 18); // (year, month -1, date)

	return (
		<Calendar now={now}/>
	);
}

export default App;
