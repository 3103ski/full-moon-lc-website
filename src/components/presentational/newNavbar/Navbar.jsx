// --> React
import React from 'react';

// --> Packages
import { motion } from 'framer-motion';

// --> Project Imports
import { motion_variants_nav } from 'util';

// --> Component Imports
import MobileNav from './mobileNav/MobileNav';
import Style from './navbar.module.scss';

export default function Navbar() {
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
		<>
			<div className={Style.Desktop}>
				<motion.nav
					className={Style.Wrapper}
					animate={scrolled === true ? 'shortNav' : 'tallNav'}
					variants={motion_variants_nav.desktop}>
					<p></p>
				</motion.nav>
			</div>
			<MobileNav />
		</>
	);
}
