import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../slider/slider 1.png";
import slider2 from "../../../slider/slider 2.png";
import slider3 from "../../../slider/slider 3.png";

const Slider = () => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img className="d-block w-100" src={slider1} alt="First slide" />
				<Carousel.Caption>
					<h3>Site View Photoshoot</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={slider2} alt="Second slide" />

				<Carousel.Caption>
					<h3>Wedding Photoshot</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={slider3} alt="Third slide" />

				<Carousel.Caption>
					<h3> Beach Photoshot</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
export default Slider;
