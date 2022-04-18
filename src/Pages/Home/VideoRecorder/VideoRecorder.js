import React from "react";

const VideoRecorder = ({ videoRecorder }) => {
	const { name, img, price } = videoRecorder;
	return (
		<div className=" col-sm-12 col-md-6 col-lg-4 gx-5">
			<div className="card" style={{ width: "18rem" }}>
				<img src={img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">
						Hey my lovely customers this is hot deal for you. you can get
						available disscount from now. Don't miss this new deal.
					</p>
					<p className="card-text">Price:{price}</p>

					<a href="#" className="btn btn-primary">
						Book Now
					</a>
				</div>
			</div>
		</div>
	);
};

export default VideoRecorder;
