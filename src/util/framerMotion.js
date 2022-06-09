// --> React
import React from 'react';

// --> Packages
import { motion } from 'framer-motion';

// --> SASS
import sassVarSizes from '../sass/variables/_sizes.scss';
import sassVarColors from '../sass/variables/_colors.scss';

//••••••••••••••••••••••••••••••••••••
// *** Variants --> Views
//••••••••••••••••••••••••••••••••••••

// Initial View State
const viewInitial = { y: '10px', opacity: 0.2 };

// View Transitions
const animatePageEnter = {
	y: 0,
	opacity: 1,
	transitionTimingFunction: 'ease-in-out',
};

const animatePageExit = {
	transition: { delay: 0.1 },
	opacity: 0,
	y: '10px',
	transitionTimingFunction: 'ease-in-out',
};

// View Wrapper
export function MotionViewWrapper({ children }) {
	return (
		<motion.div
			transition={{ duration: 0.2 }}
			initial={viewInitial}
			animate={animatePageEnter}
			exit={animatePageExit}>
			{children}
		</motion.div>
	);
}

//••••••••••••••••••••••••••••••••••••
// *** Variants --> NavBar
//••••••••••••••••••••••••••••••••••••

export const motion_variants_nav = {
	mobile: {
		open: { width: 'unset' },
		closed: { width: '0px' },
		toggleOpen: { backgroundColor: sassVarColors.primary },
		toggleClosed: { backgroundColor: 'transparent' },
	},
	desktop: {
		shortNav: { height: sassVarSizes.navbar_cpu_short },
		tallNav: { height: sassVarSizes.navbar_cpu_tall },
	},
};
