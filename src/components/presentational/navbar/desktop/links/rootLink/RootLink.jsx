// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Project Imports

// --> Component Imports
import Style from './rootLink.module.scss';

export default function RootLink({ to = '/', hover = true, padding = true, children }) {
	return (
		<Link to={to} className={Style.Link} data-hover={hover ? 1 : 0} data-padding={padding ? 1 : 0}>
			<p>{children}</p>
		</Link>
	);
}
