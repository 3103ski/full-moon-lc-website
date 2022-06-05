// --> React
import React from 'react';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { backgroundMowing, banner1000 } from '../../../assets';
import { Button } from '../../../components';
import { STAR_FILLED, YOUTUBE } from '../../../iconify';

// --> Local Styling
import style from './aboutHeader.module.scss';

export default function AboutHeader() {
	return (
		<header className={style.HeaderWrapper} style={{ backgroundImage: `url(${backgroundMowing})` }}>
			<div className={style.Overlay} />
			<Container className={style.Inner}>
				<img src={banner1000} alt='Full Moon Logo Banner' />
				<h3>BEST SERVICE IN TOWN</h3>
				<Grid className={style.ButtonWrapper}>
					<Grid.Row only='tablet computer'>
						<Button space={'10xy'} color='secondary-transp' icon={YOUTUBE}>
							Videos
						</Button>
						<Button space={'10xy'} color='secondary-transp' icon={STAR_FILLED}>
							Reviews
						</Button>
					</Grid.Row>
					<Grid.Row only='mobile'>
						<Button space={'10xy'} fluid color='secondary-transp' icon={YOUTUBE}>
							Videos
						</Button>
						<Button space={'10xy'} fluid color='secondary-transp' icon={STAR_FILLED}>
							Reviews
						</Button>
					</Grid.Row>
				</Grid>
			</Container>
		</header>
	);
}
