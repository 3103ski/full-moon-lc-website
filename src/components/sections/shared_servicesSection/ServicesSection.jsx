// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { CardLink, Button } from '../../../components';
import { VIDEOS } from '../../../routes';
import {
	curveGraphicTopLG,
	mascotCleanup1000,
	serviceTileCleanup,
	serviceTileGardens,
	serviceTileLandscaping,
	serviceTileMowing,
	stockHome,
} from '../../../assets';

// --> Local Styling
import style from './servicesSection.module.scss';

export default function ServicesSection() {
	return (
		<section className={style.SectionWrapper} style={{ backgroundImage: `url(${stockHome})` }}>
			<img className={style.TopGraphic} src={curveGraphicTopLG} alt='Curvey Layout Graphic' />
			<Container className={style.SectionInner}>
				<Grid className={style.SectionDetails}>
					<Grid.Row>
						<Grid.Column mobile={16} computer={9}>
							<div className={style.Title}>
								<h1>THE SERVICES</h1>
								<h1>YOU NEED</h1>
								<img
									className={style.ServiceGraphicMobile}
									src={mascotCleanup1000}
									alt='Full Moon Mascot Cleanup Service'
								/>
							</div>
							<p className={style.Description}>
								We offer a number of services to help make your property feel like home
							</p>

							<div className={style.ButtonsWrapper}>
								<Button space={'10x'} as={Link} to={VIDEOS} icon={'ci:youtube'}>
									Videos
								</Button>
								<Button space={'10x'} icon={'el:leaf'}>
									Request Quote
								</Button>
							</div>
						</Grid.Column>
						<Grid.Column only='computer' computer={7}>
							<img
								className={style.ServiceGraphic}
								src={mascotCleanup1000}
								alt='Full Moon Mascot Cleanup Service'
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>

				<div className={style.TilesWrapper}>
					<CardLink
						to='/articles'
						title='Landscapes'
						linkText='Learn More'
						backgroundImage={serviceTileLandscaping}
						summary='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque '
					/>
					<CardLink
						to='/articles'
						title='Mowing'
						linkText='Learn More'
						backgroundImage={serviceTileMowing}
						summary='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque '
					/>
					<CardLink
						to='/articles'
						title='Cleanup'
						linkText='Learn More'
						backgroundImage={serviceTileCleanup}
						summary='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque '
					/>
					<CardLink
						to='/articles'
						title='Gardens'
						linkText='Learn More'
						backgroundImage={serviceTileGardens}
						summary='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque '
					/>
				</div>
			</Container>
		</section>
	);
}
