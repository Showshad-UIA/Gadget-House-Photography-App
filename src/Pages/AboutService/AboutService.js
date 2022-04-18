import React from "react";
import { Link, useParams } from "react-router-dom";

const AboutService = () => {
	const { serviceId, name, price, description } = useParams();
	return (
		<div>
			<h2>{serviceId}</h2>
			<p>{name}</p>
			<p>{price}</p>
			<p>{description}</p>
			<Link to="/checkout"></Link>
			<button className="btn btm-primary">Proceed</button>
		</div>
	);
};

export default AboutService;
