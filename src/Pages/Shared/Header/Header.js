import React from "react";
import logo from "../../../logo.jpg";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
	const [user] = useAuthState(auth);
	const handleLogout = () => {
		signOut(auth);
	};
	return (
		<div>
			<>
				<Navbar
					collapseOnSelect
					expand="lg"
					sticky="top"
					bg="primary"
					variant="dark"
				>
					<Container>
						<Navbar.Brand as={Link} to="/">
							Gadget House
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link as={Link} to="blog">
									Blog
								</Nav.Link>
								<Nav.Link href="#pricing"></Nav.Link>
								<NavDropdown title="Catagory" id="collasible-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">
										Travel Guider
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">
										Birthday
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">
										Wedding
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">
										Convocation
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Nav>
								<Nav.Link as={Link} to="about">
									About
								</Nav.Link>
								{user ? (
									<button
										className="btn btn-link text-white text-decoration-none"
										onClick={handleLogout}
									>
										Logout
									</button>
								) : (
									<Nav.Link as={Link} to="login">
										Login
									</Nav.Link>
								)}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		</div>
	);
};

export default Header;
