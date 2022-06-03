import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/articles'>Articles</Link>
			<Link to='/videos'>Videos</Link>
			<Link to='/work'>Our Work</Link>
		</nav>
	);
}
