// --> React
import React from 'react';

// --> Packages
import { motion } from 'framer-motion';

// --> Project Imports
import { motion_variants_nav } from 'util';
import { Button } from 'components';
import { VIDEOS, OUR_WORK, ARTICLES, SERVICE, ABOUT_US, ESTIMATE, PHONE_NUMBER } from 'routes';
import { LEAF, PHONE } from 'icons';

// --> Component Imports
import NavBranding from './branding/Branding';
import DropMenu from './links/dropMenu/DropMenu';
import RootLink from './links/rootLink/RootLink';
import Style from './descktopNav.module.scss';

export default function DesktopNav({ services }) {
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const appWrapper = document.getElementById('app');
		appWrapper.addEventListener('scroll', (e) => {
			if (appWrapper.scrollTop > 150 && scrolled === false) {
				setScrolled(true);
			} else if (appWrapper.scrollTop <= 150 && scrolled === true) {
				setScrolled(false);
			}
		});
	}, [scrolled]);

	return (
		<div className={Style.Container}>
			<motion.nav
				className={Style.ContainerInner}
				animate={scrolled === true ? 'shortNav' : 'tallNav'}
				variants={motion_variants_nav.desktop}>
				<NavBranding scrolled={scrolled} />
				<div className={Style.CenterLinks}>
					<DropMenu
						links={services
							.map((s) =>
								!s.slug || !s.slug.current
									? null
									: {
											label: s.title,
											to: `${SERVICE}/${s.slug.current}`,
									  }
							)
							.filter((l) => l !== null)}>
						Services
					</DropMenu>
					<DropMenu
						links={[
							{ label: 'Videos', to: VIDEOS },
							{ label: 'Our Work', to: OUR_WORK },
							{ label: 'Articles', to: ARTICLES },
						]}>
						Explore
					</DropMenu>
					<RootLink to={ABOUT_US}>About Us</RootLink>
				</div>
				<div className={Style.RightLinks}>
					<RootLink to={ESTIMATE} hover={false} padding={false}>
						<Button thin icon={LEAF} color='secondary'>
							Get Estimate
						</Button>
					</RootLink>
					<RootLink href={`tel:${PHONE_NUMBER}`} hover={false}>
						<Button icon={PHONE} thin color='none'>
							Call Us Now
						</Button>
					</RootLink>
				</div>
			</motion.nav>
		</div>
	);
}
