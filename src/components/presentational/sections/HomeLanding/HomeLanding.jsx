import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

// assets
import { placeholderLawn, banner1000 } from '../../../../assets';

// Components
import { Button } from '../../../../components';

// style
import style from './homeLanding.module.scss';

export default function HomeLandingSection() {
	return (
		<div className={style.Container} style={{ backgroundImage: `url(${placeholderLawn})` }}>
			<Container>
				<div className={style.Wrapper}>
					<img src={banner1000} alt='Full Moon Banner' />
					<h3>The Right Services. The Right Price.</h3>
					<div className={style.ButtonWrapper}>
						<Button color='secondary-transp' icon={'el:leaf'}>
							Get Estimate
						</Button>
						<Button as={Link} to='/work' color='secondary-transp' icon={'mdi:mower-bag'}>
							Our Work
						</Button>
					</div>
				</div>
			</Container>
			<div className={style.Overlay} />
		</div>
	);
}
