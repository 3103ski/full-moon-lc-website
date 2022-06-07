// --> React
import React from 'react';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { Button, Card, CurveGraphic, SocialIcon } from '../../../components';
import { MOWER } from '../../../iconify';
import { mascotThumRight1000 } from '../../../assets';

// --> Local Styling
import style from './articleContent.module.scss';

export default function ArticleContentSection() {
	function SocialIcons() {
		return (
			<>
				<SocialIcon type={'fb'} color='primary' />
				<SocialIcon type={'insta'} color='primary' />
				<SocialIcon type={'email'} color='primary' />
			</>
		);
	}

	return (
		<section className={style.SectionWrapper}>
			<Container className={style.Content}>
				<div className={style.Crumbs}>
					<p>
						Articles / <span>Grass Health</span>
					</p>
				</div>
				<Grid>
					<Grid.Row>
						<Grid.Column mobile={14} tablet={13} computer={14}>
							<div className={style.Body}>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
									veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
									voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
								</p>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
									veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
									voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
									que ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
									sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
									fugit, sed quia consequuntur
								</p>
							</div>
							<Button icon={MOWER} space={'10y'} color='secondary'>
								Get Estimate Now
							</Button>
						</Grid.Column>
						<Grid.Column mobile={2} only='mobile'>
							<SocialIcons />
						</Grid.Column>
						<Grid.Column tablet={3} computer={2} only='tablet computer'>
							<Card title='Share'>
								<SocialIcons />
							</Card>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
			<Container className={style.MascotContainer}>
				<img className={style.Mascot} src={mascotThumRight1000} alt='Mascot Thumbs Up' />
			</Container>
			<CurveGraphic pos='bottom' />
		</section>
	);
}
