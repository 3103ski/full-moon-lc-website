// React
import React from 'react';

// Packages
import { Container, Grid } from 'semantic-ui-react';

// Project Imports
import { mascotArmsCrossedCutoff1000, backgroundFamily } from '../../../../assets';
import { Button, CustomerReview } from '../../../../components';
import { YELP } from '../../../../iconify';

// Local Styling
import style from './happyClients.module.scss';

export default function HappyClients() {
	return (
		<section className={style.SectionWrapper} style={{ backgroundImage: `url(${backgroundFamily})` }}>
			<div className={style.Overlay} />
			<Container className={style.Inner}>
				<Grid stretched className={style.Grid}>
					<Grid.Row stretched>
						<Grid.Column mobile={13} tablet={11} computer={10}>
							<div className={style.Title}>
								<h1>LEAVING CLIENTS</h1>
								<h1>HAPPY</h1>
							</div>
							<div className={style.ReviewsWrapper}>
								<CustomerReview />
							</div>
							<Button selfCenter icon={YELP} color='yelp'>
								Read More On Yelp
							</Button>
						</Grid.Column>
					</Grid.Row>
					<img
						className={style.MascotGraphic}
						src={mascotArmsCrossedCutoff1000}
						alt='Full Moon Mascot Arms Crossed Smiling'
					/>
				</Grid>
			</Container>
		</section>
	);
}
