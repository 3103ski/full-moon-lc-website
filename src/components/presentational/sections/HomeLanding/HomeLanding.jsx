import React from 'react';

// assets
import { placeholderLawn, banner1000 } from '../../../../assets';

// Components
import { Button } from '../../../../components';

// style
import style from './homeLanding.module.scss';

export default function HomeLandingSection() {
	return (
		<div className={style.Container} style={{ backgroundImage: `url(${placeholderLawn})` }}>
			<div className={style.Wrapper}>
				<img src={banner1000} alt='Full Moon Banner' />
				<h3>The Right Services. The Right Price.</h3>
				<div className={style.ButtonWrapper}>
					<Button color='secondary-transp'>Services</Button>
					<Button color='secondary-transp'>Our Work</Button>
				</div>
			</div>
			<div className={style.Overlay} />
		</div>
	);
}
