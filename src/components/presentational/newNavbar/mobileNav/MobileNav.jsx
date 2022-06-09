// --> React
import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

// --> Project Imports
import { motion_variants_nav } from 'util';
import { SERVICE } from 'routes';

// --> Components Imports
import Style from './mobileNav.module.scss';
import Toggle from './toggle/Toggle';

export default function MobileNav() {
	const [open, toggleOpen] = React.useState(false);
	return (
		<div className={Style.Mobile}>
			<Toggle toggle={() => toggleOpen(!open)} open={open} />
			<motion.nav className={Style.Wrapper} variants={motion_variants_nav.mobile}>
				<motion.div
					className={Style.LinkWrapper}
					variants={motion_variants_nav.mobile}
					animate={open === true ? 'open' : 'closed'}>
					<Link to={`${SERVICE}/landscaping`}>Landscaping</Link>
					<Link to={`${SERVICE}/mowing`}>Mowing</Link>
					<Link to={`${SERVICE}/gardening`}>Gardening</Link>
					<Link to={`${SERVICE}/property-cleanup`}>Property Cleanup</Link>
				</motion.div>
			</motion.nav>
			<div className={Style.MenuToggleUnderlay} onClick={() => toggleOpen(false)} data-open={open ? 1 : 0} />
		</div>
	);
}
