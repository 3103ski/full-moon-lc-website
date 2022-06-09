// --> React
import React from 'react';

// --> Packages
import { Icon } from '@iconify/react';

// --> Project Imports
import { placeholderProfilePic } from 'assets';
import { STAR_FILLED } from 'icons';

// --> Component Imports
import Style from './customerReview.module.scss';

export default function CustomerReview() {
	return (
		<div className={Style.ReviewWrapper}>
			<div className={Style.Left}>
				<img src={placeholderProfilePic} alt='Review Avatar' />
				<div className={Style.RatingWrapper}>
					<Icon icon={STAR_FILLED} />
					<Icon icon={STAR_FILLED} />
					<Icon icon={STAR_FILLED} />
					<Icon icon={STAR_FILLED} />
					<Icon icon={STAR_FILLED} />
				</div>
			</div>
			<div className={Style.Right}>
				<p>"{`My yard looks and feels amazing! I'm back outside!`}"</p>
				<p>- {`Amy Jenkins`}</p>
			</div>
		</div>
	);
}
