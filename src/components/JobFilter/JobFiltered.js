import React from "react";
import Card from "../UI/Card";

import "./JobFiltered.css";

const JobFiltered = (props) => {
	const removeHandler = (data) => {
		props.onRemoveData(data);
	};

	return (
		<>
			{props.skills.length > 0 && (
				<div className="Container">
					<Card feature={false}>
						<div className="displayStuff">
							<div>
								{props.skills.map((skill) => (
									<button
										key={Math.random()}
										type="button"
										className="filterButton"
									>
										<span className="button__text">{skill}</span>
										<span
											className="button__icon"
											onClick={() => removeHandler(skill)}
										>
											X
										</span>
									</button>
								))}
							</div>
							<div>
								<p className="clear" onClick={props.clear}>
									Clear
								</p>
							</div>
						</div>
					</Card>
				</div>
			)}
		</>
	);
};

export default JobFiltered;
