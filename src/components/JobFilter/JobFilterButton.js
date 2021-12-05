import React from "react";

import "./JobFilterButton.css";

const JobFilterButton = (props) => {
	const filterButtonHandler = (lang) => {
		props.onFilterLang(lang);
	};

	const skills = props.list.map((skill) => (
		<button
			className="FilterButton"
			type="button"
			key={Math.random()}
			onClick={() => filterButtonHandler(skill)}
		>
			{skill}
		</button>
	));

	return <div>{skills}</div>;
};

export default JobFilterButton;
