// --> React
import React from 'react';

// --> Packages
import { motion } from 'framer-motion';

// --> Project Imports
import { motion_variants_nav } from 'util';

// --> Component Imports
import Style from './drawer.module.scss';

export default function Drawer({ open, toggle, children }) {
	console.log({ open });
	return (
		<>
			<motion.div
				className={Style.DrawerWrapper}
				variants={motion_variants_nav.mobile}
				animate={open ? 'drawerOpen' : 'drawerClosed'}>
				{children}
			</motion.div>
			<div className={Style.Backdrop} onClick={() => toggle(false)} data-open={open ? 1 : 0} />
		</>
	);
}
