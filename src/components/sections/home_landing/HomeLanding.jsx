// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Project Imports
import { placeholderLawn, banner1000 } from '../../../assets';
import { OUR_WORK } from '../../../routes';
import { Button } from '../../../components';

// --> Local Styling
import style from './homeLanding.module.scss';

export default function HomeLandingSection() {
	return (
		<section fluid className={style.SectionWrapper} style={{ backgroundImage: `url(${placeholderLawn})` }}>
			<Container>
				<div className={style.Wrapper}>
					<img src={banner1000} alt='Full Moon Banner' />
					<h3>The Right Services. The Right Price.</h3>
					<div className={style.ButtonWrapper}>
						<Button space='10x' color='secondary-transp' icon={'el:leaf'}>
							Get Estimate
						</Button>
						<Button space='10x' as={Link} to={OUR_WORK} color='secondary-transp' icon={'mdi:mower-bag'}>
							Our Work
						</Button>
					</div>
				</div>
			</Container>
			<div className={style.Overlay} />
		</section>
	);
}
