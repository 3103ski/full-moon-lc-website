// --> React
import React from 'react';

// --> Packages
import { motion } from 'framer-motion';

// --> Project Imports
import { Button } from 'components';
import { motion_variants_nav } from 'util';
import { LEAF } from 'icons';

// --> Component Imports
import Style from './drawer.module.scss';

export default function Drawer({ open, toggle, children }) {
	return (
		<>
			<motion.div
				className={Style.DrawerWrapper}
				variants={motion_variants_nav.mobile}
				animate={open ? 'drawerOpen' : 'drawerClosed'}>
				<div style={{ position: 'absolute', right: '20px', top: '20px' }}>
					<Button icon={LEAF} thin color='secondary'>
						Request Estimate
					</Button>
				</div>
				{children}
			</motion.div>
			<div className={Style.Backdrop} onClick={() => toggle(false)} data-open={open ? 1 : 0} />
		</>
	);
}
