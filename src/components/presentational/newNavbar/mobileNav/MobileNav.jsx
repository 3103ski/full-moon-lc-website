// --> React
import React from 'react';

// --> Project Imports
import { SERVICE, ABOUT_US, VIDEOS, OUR_WORK, HOME, ARTICLES } from 'routes';

// --> Components Imports
import Drawer from './drawer/Drawer';
import Link from './link/Link.jsx';
import Style from './mobileNav.module.scss';
import Toggle from './toggle/Toggle.jsx';

export default function MobileNav() {
	const [open, toggleOpen] = React.useState(true);

	return (
		<div className={Style.Container}>
			<Toggle toggle={() => toggleOpen(!open)} open={open} />
			<Drawer open={open} toggle={toggleOpen}>
				<Link.Container>
					<Link toggle={toggleOpen} to={HOME}>
						Home
					</Link>
					<Link.SectionLabel>Explore</Link.SectionLabel>
					<Link toggle={toggleOpen} to={OUR_WORK}>
						Our Work
					</Link>
					<Link toggle={toggleOpen} to={ARTICLES}>
						Articles
					</Link>
					<Link toggle={toggleOpen} to={VIDEOS}>
						Videos
					</Link>
					<Link toggle={toggleOpen} to={ABOUT_US}>
						About Us
					</Link>
					<Link.SectionLabel>Services</Link.SectionLabel>
					<Link toggle={toggleOpen} to={`${SERVICE}/landscaping`}>
						Landscaping
					</Link>
					<Link toggle={toggleOpen} to={`${SERVICE}/mowing`}>
						Mowing
					</Link>
					<Link toggle={toggleOpen} to={`${SERVICE}/gardening`}>
						Gardening
					</Link>
					<Link toggle={toggleOpen} to={`${SERVICE}/property-cleanup`}>
						Property Cleanup
					</Link>
				</Link.Container>
			</Drawer>
		</div>
	);
}
