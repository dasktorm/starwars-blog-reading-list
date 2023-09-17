import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand p-3">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary me-3">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
