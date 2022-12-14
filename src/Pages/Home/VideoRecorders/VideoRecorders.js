import React from "react";

import videogrpher1 from "../../../images/catagory 1.jpg";
import videogrpher2 from "../../../images/catagory 2.jpg";
import videogrpher3 from "../../../images/catagory 3.jpg";
import VideoRecorder from "../VideoRecorder/VideoRecorder";

const experts = [
	{
		id: 1,
		name: "cristian",
		img: videogrpher1,
		Price: "RM50",
	},
	{
		id: 2,
		name: "Jhony sing",
		img: videogrpher2,
		price: "RM 65",
	},
	{
		id: 3,
		name: "albert",
		img: videogrpher3,
		price: "rm 60",
	},
];

const VideoRecorders = () => {
	return (
		<div className="container">
			<h2 className="text-primary text-center mt-5 mb-5">Hot Deal</h2>
			<div className="row">
				{experts.map((videoRecorder) => (
					<VideoRecorder
						key={VideoRecorder.id}
						videoRecorder={videoRecorder}
					></VideoRecorder>
				))}
			</div>
		</div>
	);
};

export default VideoRecorders;
