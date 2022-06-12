// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { Button } from 'components';
import { placeholderLawn, banner1000, bannerVert_700 } from 'assets';
import { OUR_WORK, ESTIMATE } from 'routes';
import { MOWER, LEAF } from 'icons';

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

						{/* TABLET + COMPUTER BUTTONS  */}
						<Grid.Column textAlign='center' tablet={16} computer={16} only='tablet computer'>
							<div className={style.ButtonWrapper}>
								<Button as={Link} to={ESTIMATE} space='10x' color='secondaryTransp' icon={LEAF}>
									Get Estimate
								</Button>
								<Button space='10x' as={Link} to={OUR_WORK} color='secondaryTransp' icon={MOWER}>
									Our Work
								</Button>
							</div>
						</Grid.Column>

						{/* MOBILE BUTTONS */}
						<Grid.Column textAlign='center' mobile={16} only='mobile'>
							<Button.FluidWrapper>
								<Button as={Link} to={ESTIMATE} fluid space='10y' color='secondaryTransp' icon={LEAF}>
									Get Estimate
								</Button>
								<Button fluid color='secondaryTransp' as={Link} to={OUR_WORK} icon={MOWER}>
									Our Work
								</Button>
							</Button.FluidWrapper>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
			<div className={style.Overlay} />
		</header>
	);
}
