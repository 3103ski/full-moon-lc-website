import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';

import { banner500 } from '../../../assets';
import { Button } from '../../../components';

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
			<Link to='/' className={style.LogoWrapper}>
				<img src={banner500} alt='Navbar logo' />
			</Link>
			<div className={style.Center}>
				<Link to='/'>Home</Link>
				<DropMenu label='Services'>
					<DropLink to='/videos'>Landscaping</DropLink>
					<DropLink to='/articles'>Mowing</DropLink>
					<DropLink to='/work'>Gardening</DropLink>
					<DropLink to='/work'>Property Cleanup</DropLink>
				</DropMenu>
				<DropMenu label='Explore'>
					<DropLink to='/videos'>Videos</DropLink>
					<DropLink to='/articles'>Articles</DropLink>
					<DropLink to='/work'>Our Work</DropLink>
				</DropMenu>
				<Link to='/about'>About Us</Link>
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
