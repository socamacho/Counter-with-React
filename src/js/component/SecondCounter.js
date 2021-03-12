import React from "react";
import PropTypes from "prop-types";

const SecondCounter = props => {
	return (
		<div className="container">
			<div className="symbol">
				<i className="far fa-clock"></i>
			</div>
			<div className="box1">0</div>
			<div className="box2">0</div>
			<div className="box3">0</div>
			<div className="box4">0</div>
			<div>{props.segundos}</div>
		</div>
	);
};

SecondCounter.propTypes = {
	segundos: PropTypes.number
};

export default SecondCounter;
