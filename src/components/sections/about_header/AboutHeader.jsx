// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { backgroundMowing, banner1000 } from 'assets';
import { Button } from 'components';
import { STAR_FILLED, YOUTUBE } from 'icons';
import { VIDEOS, YELP_URL } from 'routes';

// --> Component Imports
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
						<Button as={Link} to={VIDEOS} space={'10xy'} color='secondaryTransp' icon={YOUTUBE}>
							Videos
						</Button>
						<Button as={'a'} href={YELP_URL} space={'10xy'} color='secondaryTransp' icon={STAR_FILLED}>
							Reviews
						</Button>
					</Grid.Row>
					<Grid.Row only='mobile'>
						<Button.FluidWrapper>
							<Button as={Link} to={VIDEOS} space={'10y'} fluid color='secondaryTransp' icon={YOUTUBE}>
								Videos
							</Button>
							<Button
								as={'a'}
								target={'_blank'}
								href={YELP_URL}
								fluid
								color='secondaryTransp'
								icon={STAR_FILLED}>
								Reviews
							</Button>
						</Button.FluidWrapper>
					</Grid.Row>
				</Grid>
			</Container>
		</header>
	);
}
