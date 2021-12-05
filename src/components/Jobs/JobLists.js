import React, { useState } from "react";

import Card from "../UI/Card";
import JobInfo from "./JobInfo";
import JobFilterButton from "../JobFilter/JobFilterButton";
import JobFiltered from "../JobFilter/JobFiltered";

import Logo from "../UI/Logo";
import { jobData } from "../../data";
import "./JobLists.css";

const JobLists = () => {
	const [value, setValue] = useState([]);

	const checkerHelper = (arr, target) => target.every((el) => arr.includes(el));

	const filteredHandler = (data) => {
		setValue((prevState) => {
			return [...new Set([...prevState, data])];
		});
	};

	const clearHandler = () => {
		setValue((prevState) => {
			return [];
		});
	};

	const removeHandler = (data) => {
		setValue((prevState) => {
			return prevState.filter((el) => el !== data);
		});
	};

	let display = null;

	const listingStyle = { width: "81.26%", position: "relative" };

	const jobList = jobData.map((job) => {
		if (value.length < 1) {
			display = (
				<div style={listingStyle} key={job.id}>
					<Logo logo={job.logo} feature={job.featured} />
					<Card feature={job.featured}>
						<JobInfo
							company={job.company}
							new={job.new}
							featured={job.featured}
							position={job.position}
							postedAt={job.postedAt}
							contract={job.contract}
							location={job.location}
						/>
						<div
							className="horizontalLine"
							style={{
								borderBottom: ".1rem solid #b7c4c4",
								margin: "1.6rem 0",
							}}
						></div>
						<JobFilterButton
							list={[job.role, job.level, ...job.languages, ...job.tools]}
							onFilterLang={filteredHandler}
						/>
					</Card>
				</div>
			);
		} else {
			const jobNeed = [job.role, job.level, ...job.languages, ...job.tools];
			if (checkerHelper(jobNeed, value)) {
				display = (
					<div style={listingStyle} key={job.id}>
						<Logo logo={job.logo} feature={job.featured} />
						<Card feature={job.featured}>
							<JobInfo
								company={job.company}
								new={job.new}
								featured={job.featured}
								position={job.position}
								postedAt={job.postedAt}
								contract={job.contract}
								location={job.location}
							/>
							<div
								className="horizontalLine"
								style={{
									borderBottom: ".1rem solid #b7c4c4",
									margin: "1.6rem 0",
								}}
							></div>
							<JobFilterButton list={jobNeed} onFilterLang={filteredHandler} />
						</Card>
					</div>
				);
			} else {
				display = "";
			}
		}
		return display;
	});

	return (
		<div className={`JobLists ${value.length > 0 ? "filterTrue" : ""}`}>
			<JobFiltered
				skills={value}
				clear={clearHandler}
				onRemoveData={removeHandler}
			/>
			{jobList}
		</div>
	);
};

export default JobLists;
