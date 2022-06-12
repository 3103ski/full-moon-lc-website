// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';
import SanityBlockContent from '@sanity/block-content-to-react';

// --> Project Imports
import { Button, Card, CurveGraphic, SocialIcon } from 'components';
import { MOWER } from 'icons';
import { mascotThumRight1000 } from 'assets';
import { ARTICLES, ESTIMATE } from 'routes';

// --> Component Imports
import style from './articleContent.module.scss';

export default function ArticleContentSection({ article }) {
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
		article && (
			<section className={style.SectionWrapper}>
				<Container className={style.Content}>
					<div className={style.Crumbs}>
						<p>
							<Link to={ARTICLES}>Articles</Link> / <span>{article.title}</span>
						</p>
					</div>
					<Grid>
						<Grid.Row>
							<Grid.Column mobile={14} tablet={13} computer={14}>
								<div className={style.Body}>
									{article.body && <SanityBlockContent blocks={article.body} />}
								</div>
								<Link to={ESTIMATE}>
									<Button icon={MOWER} space={'10y'} color='secondary'>
										Get Estimate Now
									</Button>
								</Link>
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
		)
	);
}
