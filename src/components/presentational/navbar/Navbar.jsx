// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Icon } from '@iconify/react';

// --> Project Imports
import { banner500 } from 'assets';
import { LEAF, CARROT_DOWN, PHONE } from 'icons';
import { Button } from 'components';
import { HOME, VIDEOS, ARTICLES, OUR_WORK, ABOUT_US, SERVICE } from 'routes';

// --> Component Imports
import style from './navbar.module.scss';

export default function Navbar() {
	function DropMenu({ label = 'Menu', children }) {
		return (
			<div className={style.DropMenu}>
				<div className={style.DropLabel}>
					{label}
					<Icon icon={CARROT_DOWN} />
				</div>
				<div className={style.DropWrapper}>{children}</div>
			</div>
		);
	}

	function DropLink({ children, to }) {
		return (
			<Link to={to} className={style.DropLink}>
				{children}
			</Link>
		);
	}

	return (
		<nav className={style.Wrapper}>
			<Link to={HOME} className={style.LogoWrapper}>
				<img src={banner500} alt='Navbar logo' />
			</Link>
			<div className={style.Center}>
				<DropMenu label='Services'>
					<DropLink to={`${SERVICE}/landscaping`}>Landscaping</DropLink>
					<DropLink to={`${SERVICE}/mowing`}>Mowing</DropLink>
					<DropLink to={`${SERVICE}/gardening`}>Gardening</DropLink>
					<DropLink to={`${SERVICE}/property-cleanup`}>Property Cleanup</DropLink>
				</DropMenu>
				<DropMenu label='Explore'>
					<DropLink to={VIDEOS}>Videos</DropLink>
					<DropLink to={ARTICLES}>Articles</DropLink>
					<DropLink to={OUR_WORK}>Our Work</DropLink>
				</DropMenu>
				<Link to={ABOUT_US}>About Us</Link>
			</div>
			<div className={style.RightSide}>
				<Button thin icon={LEAF} color='secondary'>
					Get Estimate
				</Button>
				<Button icon={PHONE} color='none'>
					1 (888) 555 - 5555
				</Button>
			</div>
		</nav>
	);
}
