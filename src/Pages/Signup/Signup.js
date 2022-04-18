import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const navigate = useNavigate();
	const redirectLogin = () => {
		navigate("/login");
	};
	if (user) {
		navigate("/home");
	}
	const handleSignup = (event) => {
		event.preventDefault();
		console.log(event.target.email.value);

		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		createUserWithEmailAndPassword(email, password);
	};

	return (
		<div className="signup-form">
			<h1 className="text-center text-primary mt-5">Please Signup</h1>
			<form onSubmit={handleSignup}>
				<input type="text" name="name" id="" placeholder="Input Your Name" />{" "}
				<input
					type="email"
					name="email"
					id=""
					placeholder="Input your Mail"
					required
				/>{" "}
				<input
					type="password"
					name="password"
					placeholder="Type your password"
					required
					id=""
				/>{" "}
				<input type="submit" value="signup" />
			</form>
			<p>
				Already Registerd?
				<Link
					to="/login"
					className="text-danger text-decoration-none pe-auto "
					onClick={redirectLogin}
				>
					Please Login
				</Link>
			</p>
		</div>
	);
};

export default Signup;
