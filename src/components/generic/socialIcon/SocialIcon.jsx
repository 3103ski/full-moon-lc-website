// --> React
import React from 'react';

// --> Packages
import { Icon } from '@iconify/react';

// Project Imports
import { YELP, FACEBOOK, INSTAGRAM, YOUTUBE } from '../../../iconify';

// --> Local Styling
import style from './socialIcon.module.scss';

export default function SocialIcon({ type, color = 'light', size = 'default' }) {
	function icon() {
		switch (type) {
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
	return (
		<div className={style.Wrapper} data-color={color} data-size={size}>
			<Icon icon={icon()} />
		</div>
	);
}
