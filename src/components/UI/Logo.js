import React from "react";

import "./Logo.css";

const Logo = (props) => {
	return (
		<img
			className={`logo ${props.feature ? "featureLogo" : ""}`}
			src={props.logo}
			alt=""
		/>
	);
};

export default Logo;
