// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { placeholderLawn, banner1000, bannerVert_700 } from '../../../assets';
import { OUR_WORK } from '../../../routes';
import { Button } from '../../../components';
import { MOWER } from '../../../iconify';

// --> Local Styling
import style from './homeLanding.module.scss';

export default function HomeLandingSection() {
	return (
		<header fluid className={style.SectionWrapper} style={{ backgroundImage: `url(${placeholderLawn})` }}>
			<Container>
				<Grid className={style.Wrapper}>
					<Grid.Row>
						<Grid.Column className={style.LogoDesktop} tablet={16} computer={16} only='tablet computer'>
							<img src={banner1000} alt='Full Moon Banner' />
						</Grid.Column>
						<Grid.Column className={style.LogoMobile} mobile={16} only='mobile'>
							<img src={bannerVert_700} alt='Full Moon Banner' />
						</Grid.Column>
						<Grid.Column textAlign='center' mobile={16}>
							<h3>The Right Services. The Right Price.</h3>
						</Grid.Column>
						<Grid.Column textAlign='center' tablet={16} computer={16} only='tablet computer'>
							<div className={style.ButtonWrapper}>
								<Button space='10xy' color='secondary-transp' icon={'el:leaf'}>
									Get Estimate
								</Button>
								<Button space='10xy' as={Link} to={OUR_WORK} color='secondary-transp' icon={MOWER}>
									Our Work
								</Button>
							</div>
						</Grid.Column>
						<Grid.Column textAlign='center' mobile={16} only='mobile'>
							<div className={style.ButtonWrapper}>
								<Button fluid space='10xy' color='secondary-transp' icon={'el:leaf'}>
									Get Estimate
								</Button>
								<Button
									fluid
									space='10xy'
									as={Link}
									to={OUR_WORK}
									color='secondary-transp'
									icon={MOWER}>
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
