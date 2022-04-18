import React from "react";

const SocialLogin = () => {
	return (
		<div>
			<p className="text-center">or</p>

			<div d-flex align-items-center>
				<button className="d-block btn btn-primary mx-auto w-50 mb-3">
					Google Sign In
				</button>
				<button className="  d-block btn btn-primary mx-auto w-50">
					Github Sign In
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
