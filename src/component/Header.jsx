import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import "../style/style.css";
import logo from "../images/theonrex plain.png";
import { NavLink } from "react-router-dom";



function Header() {
	let activeStyle = {
		textDecoration: "underline",
	};

	let activeClassName = "underline";


	return (
		<div>
			<Navbar bg="white" expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						{" "}
						<img src={logo} className="logo" alt="logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />

					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto" variant="pills" defaultActiveKey="/home">
							{" "}
							<nav className="NavLink">
								<NavLink
									to="/"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									Home
								</NavLink>
							</nav>
							<nav className="NavLink">
								<NavLink
									to="/About"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									About
								</NavLink>
							</nav>{" "}
							<nav className="NavLink">
								<NavLink
									to="/Service"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									Service
								</NavLink>
							</nav>{" "}
							<nav className="NavLink">
								<NavLink
									to="/Contact"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									Contact
								</NavLink>
							</nav>{" "}
							<nav className="NavLink">
								<NavLink
									to="/Package"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									Package
								</NavLink>
							</nav>{" "}
							<nav className="NavLink">
								<NavLink
									to="/neon"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									Neon Merchant
								</NavLink>
							</nav>
						</Nav>
						<NavLink
							className="justify-content-end sign "
							to="/neon"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<button> Sign-Up</button>{" "}
						</NavLink>

						<NavLink
							className="justify-content-end sign "
							to="/neon"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<button>Log-In </button>{" "}
						</NavLink>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
export default Header;
