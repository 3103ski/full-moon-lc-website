// --> React
import React from 'react';

// --> Packages
import { Icon } from '@iconify/react';

// Project Imports
import { YELP, FACEBOOK, INSTAGRAM, YOUTUBE, EMAIL } from 'icons';

// --> Component Imports
import style from './socialIcon.module.scss';

export default function SocialIcon({ type, color = 'light', link = null, size = 'default', margin = '10px auto' }) {
	function icon() {
		switch (type) {
			case 'email':
				return EMAIL;
			case 'youtube':
				return YOUTUBE;
			case 'insta':
			case 'instagram':
				return INSTAGRAM;
			case 'facebook':
			case 'fb':
				return FACEBOOK;
			case 'yelp':
			default:
				return YELP;
		}
	}
	const renderIcon = () => (
		<div className={style.Wrapper} data-color={color} data-size={size} style={{ margin }}>
			<Icon icon={icon()} />
		</div>
	);
	return link ? (
		<a target='_blank' href={link} rel='noreferrer'>
			{renderIcon()}
		</a>
	) : (
		renderIcon()
	);
}
