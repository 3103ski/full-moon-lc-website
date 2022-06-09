// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { Button } from '../../../components';
import { placeholderLawn, banner1000, bannerVert_700 } from '../../../assets';
import { OUR_WORK } from '../../../routes';
import { MOWER, LEAF } from '../../../iconify';

// --> Component Imports
import style from './homeLanding.module.scss';

export default function HomeLandingSection() {
	return (
		<header className={style.SectionWrapper} style={{ backgroundImage: `url(${placeholderLawn})` }}>
			<Container>
				<Grid className={style.Wrapper}>
					<Grid.Row>
						{/* MOBILE & DESKTOP LOGS */}
						<Grid.Column className={style.LogoDesktop} tablet={16} computer={16} only='tablet computer'>
							<img src={banner1000} alt='Full Moon Banner' />
						</Grid.Column>
						<Grid.Column className={style.LogoMobile} mobile={16} only='mobile'>
							<img src={bannerVert_700} alt='Full Moon Banner' />
						</Grid.Column>

						{/* BELOW BANNER SLOGAN */}
						<Grid.Column textAlign='center' mobile={16}>
							<h3>The Right Services. The Right Price.</h3>
						</Grid.Column>

						{/* BUTTONS ABOVE MOBILE */}
						<Grid.Column textAlign='center' tablet={16} computer={16} only='tablet computer'>
							<div className={style.ButtonWrapper}>
								<Button space='10x' color='secondaryTransp' icon={LEAF}>
									Get Estimate
								</Button>
								<Button space='10x' as={Link} to={OUR_WORK} color='secondaryTransp' icon={MOWER}>
									Our Work
								</Button>
							</div>
						</Grid.Column>

						{/* MOBILE BUTTONS */}
						<Grid.Column textAlign='center' mobile={16} only='mobile'>
							<div className={style.ButtonWrapper}>
								<Button fluid space='10xy' color='secondaryTransp' icon={LEAF}>
									Get Estimate
								</Button>
								<Button fluid space='10xy' color='secondaryTransp' as={Link} to={OUR_WORK} icon={MOWER}>
									Our Work
								</Button>
							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
			<div className={style.Overlay} />
		</header>
	);
}
