import React from "react";
import img from "../../images/photo.png";
import "./About.css";

const About = () => {
	return (
		<div>
			<h1 className="text-center"> Know About Me</h1>
			<div className="d-flex justify-content-between container">
				<div>
					<img className="mt-5 photo" src={img} alt="" />
				</div>
				<div className="mx-5 mt-5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
					ullam! Quisquam libero maiores sint doloremque provident autem iste
					animi modi veniam eius sequi aliquid repellendus asperiores
					consectetur est, esse tempore
				</div>
			</div>
		</div>
	);
};

export default About;
