// --> React
import React from 'react';

// --> Packages
import { Icon } from '@iconify/react';

// --> Project Imports
import { placeholderProfilePic } from '../../../assets';
import { STAR_FILLED } from '../../../iconify';

// --> Local Styling
import style from './customerReview.module.scss';

export default function CustomerReview() {
	return (
		<div className={style.ReviewWrapper}>
			<div className={style.Left}>
				<img src={placeholderProfilePic} alt='Review Avatar' />
				<div className={style.RatingWrapper}>
					<Icon icon={STAR_FILLED} />
					<Icon icon={STAR_FILLED} />
					<Icon icon={STAR_FILLED} />
					<Icon icon={STAR_FILLED} />
					<Icon icon={STAR_FILLED} />
				</div>
			</div>
			<div className={style.Right}>
				<p>"{`My yard looks and feels amazing! I'm back outside!`}"</p>
				<p>- {`Amy Jenkins`}</p>
			</div>
		</div>
	);
}
