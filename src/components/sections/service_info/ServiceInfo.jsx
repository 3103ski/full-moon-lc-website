// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';
import SanityBlockContent from '@sanity/block-content-to-react';

// --> Project Imports
import { Button, FAQ, FAQItem, CurveGraphic } from 'components';
import { MOWER } from 'icons';
import { ESTIMATE } from 'routes';

// --> Component Imports
import Style from './serviceInfo.module.scss';

export default function ServiceInfoSection({ service = null }) {
	return (
		service && (
			<section className={Style.SectionWrapper}>
				{service.graphic && (
					<img className={Style.Graphic} src={service.graphic.img.asset.url} alt='service graphic' />
				)}
				<Container>
					<Grid>
						<Grid.Row>
							<Grid.Column
								mobile={16}
								tablet={!service.faqs || service.faqs.length === 0 ? 16 : 9}
								computer={!service.faqs || service.faqs.length === 0 ? 16 : 10}
								className={Style.Body}>
								<SanityBlockContent blocks={service.body} />
								<Link to={ESTIMATE}>
									<Button
										className={Style.Btn}
										selfCenter
										space='10xy'
										icon={MOWER}
										color='secondary'>
										Get Estimate
									</Button>
								</Link>
							</Grid.Column>
							{!service.faqs || service.faqs.length === 0 ? null : (
								<Grid.Column mobile={16} tablet={7} computer={6}>
									<FAQ>
										{service.faqs.map((item, i) => (
											<FAQItem
												useIcon
												blockContent
												question={item.question}
												key={`${Math.random()}_${i}`}
												answer={item.answer}
											/>
										))}
									</FAQ>
								</Grid.Column>
							)}
						</Grid.Row>
					</Grid>
					<CurveGraphic pos='bottom' />
				</Container>
			</section>
		)
	);
}
