import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
	const navigate = useNavigate();
	const redirectLogin = () => {
		navigate("/login");
	};
	const handleSignup = (e) => {
		e.preventDefault();
	};

	return (
		<div className="signup-form">
			<h1 className="text-center text-primary mt-5">Please Signup</h1>
			<form action="">
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
				Already Registerd?{""}
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
