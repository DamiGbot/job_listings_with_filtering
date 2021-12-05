import React from "react";

import "./JobInfo.css";

const JobInfo = (props) => {
	return (
		<div className="JobInfo">
			<div className="JobInfo__company">
				<p className="JobInfo__company--name">{props.company} </p>
				<div className="JobInfo__company--highlight">
					{props.new && <p className="JobInfo__company--new highlight">NEW!</p>}
					{props.featured && (
						<p className="JobInfo__company--featured highlight">FEATURED</p>
					)}
				</div>
			</div>

			<p className="JobInfo__position">{props.position}</p>

			<p className="JobInfo__details">
				<span>{props.postedAt} </span>
				&nbsp;&bull;&nbsp;
				<span> {props.contract} </span>
				&nbsp;&bull;&nbsp;
				<span> {props.location} </span>
			</p>
		</div>
	);
};

export default JobInfo;
