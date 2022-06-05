// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { Button } from '../../../components';
import { placeholderWorker, mascotThumRight1000 } from '../../../assets';
import { ABOUT_US } from '../../../routes';

// --> Local Styling
import style from './profLawnCare.module.scss';

export default function ProfLawnCareSection() {
	return (
		<Container fluid className={style.Outer} as={'section'}>
			<Container className={style.Inner}>
				<div className={`${style.CircleOne} ${style.Circle}`} />
				<div className={`${style.CircleTwo} ${style.Circle}`} />

				<Grid>
					<Grid.Row>
						<Grid.Column stretched mobile={16} computer={8} className={style.Column}>
							<div className={style.Content}>
								<h1>Professional Lawn Care</h1>
								<h3>The quality your property deserves</h3>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
									veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
									voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
								</p>
								<Link to={ABOUT_US}>
									<Button>About Us</Button>
								</Link>
							</div>
							<img src={mascotThumRight1000} alt='Full Moon Mascot' className={style.MascotGraphic} />
						</Grid.Column>
						<Grid.Column only='computer' computer={8} className={style.Column}>
							<img src={placeholderWorker} alt='worker' className={style.CircleImage} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Container>
	);
}
