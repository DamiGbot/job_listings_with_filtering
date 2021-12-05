import React from "react";

import "./Card.css";

const Card = (props) => {
	return (
		<div className={`Card ${props.feature ? "feature" : " "}`}>
			<div className="card_items"> {props.children}</div>
		</div>
	);
};

export default Card;
