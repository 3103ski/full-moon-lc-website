// --> React
import React from 'react';

// --> Project Imports
import { fetchServiceSlugs } from 'groq';
import { checkSeshStorageAddIfNeeded } from 'util';

// --> Component Imports
import MobileNav from './mobile-tablet/MobileNav';
import DesktopNav from './desktop/DesktopNav';

/**
 * DEV NOTE : For info on framer motion, see nav variants in '/src/util/framerMotion.js'
 */

export default function Navbar() {
	const [services, setServices] = React.useState(null);

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded(`fmlc_services`, setServices, fetchServiceSlugs);
	}, []);

	return (
		services && (
			<>
				<DesktopNav services={services} />
				<MobileNav services={services} />
			</>
		)
	);
}
