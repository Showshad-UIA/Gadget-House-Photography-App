import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
	const { id, name, img, price, description } = service;
	const navigate = useNavigate();
	const serviceDetail = (id) => {
		navigate(`/service/${id}`);
	};
	return (
		<div className="service">
			<img className="w-100" src={img} alt="" />
			<h2>{name}</h2>
			<p>{price}</p>
			<p>
				<small>{description}</small>
			</p>
			<button onClick={() => serviceDetail(id)} className="btn btn-secondary">
				{name}
			</button>
		</div>
	);
};

export default Service;
