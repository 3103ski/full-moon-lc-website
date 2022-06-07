// --> React
import React from 'react';

// --> Packages
import { motion } from 'framer-motion';

export default function MotionDiv({ children }) {
	return (
		<motion.div
			transition={{ duration: 0.2 }}
			initial={{ y: '10px', opacity: 0.2 }}
			animate={{
				y: 0,
				opacity: 1,
				transitionTimingFunction: 'ease-in-out',
			}}
			exit={{
				transition: { delay: 0.1 },
				opacity: 0,
				y: '10px',
				transitionTimingFunction: 'ease-in-out',
			}}>
			{children}
		</motion.div>
	);
}
