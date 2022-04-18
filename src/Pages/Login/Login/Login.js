import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const mailRef = useRef("");
	const refPassword = useRef("");
	const navigate = useNavigate();

	const handleButton = (e) => {
		e.preventDefault();
		const email = mailRef.current.value;
		const password = refPassword.current.value;
	};

	const redirect = (e) => {
		navigate("/signup");
	};

	return (
		<div className="container w-50 mx-auto">
			<h1 className="text-primary mt-3 text-center">Login</h1>
			<Form onSubmit={handleButton}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control ref={mailRef} type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						ref={refPassword}
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Login
				</Button>
			</Form>
			<p>
				Are you new at Gadget House?{" "}
				<Link
					to="/signup"
					className="text-danger text-decoration-none pe-auto "
					onClick={redirect}
				>
					Please Signup
				</Link>
			</p>
		</div>
	);
};

export default Login;
