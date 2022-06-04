// React
import React from 'react';
import { Link } from 'react-router-dom';

// Packages
import { Icon } from '@iconify/react';

// Project Imports
import { banner500 } from '../../../assets';
import { Button } from '../../../components';
import { HOME, VIDEOS, ARTICLES, OUR_WORK, ABOUT_US } from '../../../routes';

// Styling
import style from './navbar.module.scss';

export default function Navbar() {
	function DropMenu({ label = 'Menu', children }) {
		return (
			<div className={style.DropMenu}>
				<div className={style.DropLabel}>
					{label}
					<Icon icon='ant-design:caret-down-outlined' />
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
				<Link to={HOME}>Home</Link>
				<DropMenu label='Services'>
					<DropLink to={VIDEOS}>Landscaping</DropLink>
					<DropLink to={VIDEOS}>Mowing</DropLink>
					<DropLink to={VIDEOS}>Gardening</DropLink>
					<DropLink to={VIDEOS}>Property Cleanup</DropLink>
				</DropMenu>
				<DropMenu label='Explore'>
					<DropLink to={VIDEOS}>Videos</DropLink>
					<DropLink to={ARTICLES}>Articles</DropLink>
					<DropLink to={OUR_WORK}>Our Work</DropLink>
				</DropMenu>
				<Link to={ABOUT_US}>About Us</Link>
			</div>
			<div className={style.RightSide}>
				<Button thin icon={'el:leaf'} color='secondary'>
					Get Estimate
				</Button>
				<Button icon={'carbon:phone-voice-filled'} color='none'>
					1 (888) 555 - 5555
				</Button>
			</div>
		</nav>
	);
}
