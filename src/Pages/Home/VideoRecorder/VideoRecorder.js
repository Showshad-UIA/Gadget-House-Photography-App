import React from "react";

const VideoRecorder = ({ videoRecorder }) => {
	const { name, img } = videoRecorder;
	return (
		<div className=" col-sm-12 col-md-6 col-lg-4 gx-5">
			<div className="card" style={{ width: "18rem" }}>
				<img src={img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Connect US
					</a>
				</div>
			</div>
		</div>
	);
};

export default VideoRecorder;
