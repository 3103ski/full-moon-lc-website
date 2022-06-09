// --> React
import React from 'react';

// --> Packages
import { motion } from 'framer-motion';

// --> Project Imports
import { motion_variants_nav } from 'util';

// --> Component Imports
import Style from './toggle.module.scss';

export default function Toggle({ toggle, open }) {
	return (
		<motion.button
			className={Style.Toggle}
			animate={open ? 'toggleOpen' : 'toggleClosed'}
			variants={motion_variants_nav.mobile}
			onClick={toggle}>
			<svg width='27' height='27' viewBox='0 0 23 23'>
				<Path
					animate={open ? 'open' : 'closed'}
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
				/>
				<Path
					animate={open ? 'open' : 'closed'}
					d='M 2 9.423 L 20 9.423'
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					animate={open ? 'open' : 'closed'}
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
				/>
			</svg>
		</motion.button>
	);
}

function Path(props) {
	return <motion.path fill='transparent' strokeWidth='3' stroke='white' strokeLinecap='round' {...props} />;
}
