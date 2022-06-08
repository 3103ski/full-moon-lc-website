// --> React
import React from 'react';

// --> Packages
import { motion } from 'framer-motion';

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
// *** Variants --> Animations
//••••••••••••••••••••••••••••••••••••
