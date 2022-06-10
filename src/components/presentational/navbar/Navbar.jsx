// --> React
import React from 'react';

// --> Component Imports
import MobileNav from './mobile-tablet/MobileNav';
import DesktopNav from './desktop/DesktopNav';

/**
 * DEV NOTE : For info on framer motion, see nav variants in '/src/util/framerMotion.js'
 */

export default function Navbar() {
	return (
		<>
			<DesktopNav />
			<MobileNav />
		</>
	);
}
