// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { motion } from 'framer-motion';

// --> Project Imports
import { motion_variants_nav } from 'util';

// --> Component Imports
import Style from './rootLink.module.scss';

export default function RootLink({ to = '/', hover = true, padding = true, children }) {
	return (
		<motion.div
			className={Style.Link}
			variants={motion_variants_nav.desktop}
			data-padding={padding ? 1 : 0}
			whileHover={hover ? 'rootLinkHover' : ''}>
			<Link to={to}>{children}</Link>
		</motion.div>
	);
}
