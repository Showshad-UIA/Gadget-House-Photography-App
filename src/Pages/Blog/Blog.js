import React from "react";

const Blog = () => {
	return (
		<div className="mt-5">
			<div className="container">
				<h3>
					Q1. What is the diffrences between authorization and authentication?{" "}
				</h3>
				<p>
					Answer: Authentication, in my perspective, is the process of
					authenticating our credentials, such as our User Name/User ID and
					password, in order to validate our identity. When we utilise the
					OpenID Connect protocol to do this. By clicking the My Account tab in
					the top right corner, we can manage our login.
				</p>
			</div>

			<div className="container">
				<h3>
					Q2. Why are we using firebase? what other option do we have to
					implement authentication?{" "}
				</h3>
				<p>
					Answer: Firebase is a Google platform that delivers functions and
					assists with the backend. It's mostly used for our mobile app, iOS, or
					online, as well as some items. Realtime database, Cloud functions,
					Analytics, Equipment, Cloud Fire store, and more features are
					included.
					<p>
						There are many available service are providing by firebase.
						Basically it's very good platform for storage as database purposes.
						Also they have cloud messging, remote config and so on . However,
						for our project purposes we are mostly using for authentication like
						email, password authentication, google, github, facebook and other
						social media sign in purposes.{" "}
					</p>
				</p>
			</div>
			<div className="container">
				<h3>
					What other services does firebase provide other then authentication?
				</h3>
				<p>
					There are severale services are provided... For Example:
					<li> Cloud Functions </li>
					<li>Predictions</li>
					<li>Hosting</li>
					<li>Analitycs</li>
					<li>Cloud Messaging</li>
					<li>Cloud Firestore</li>
				</p>
			</div>
		</div>
	);
};

export default Blog;
