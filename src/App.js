import React from "react";

import Nav from "./components/UI/Nav";
import JobLists from "./components/Jobs/JobLists";

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Nav />
			<JobLists />
		</div>
	);
};

export default App;
