// --> React
import React from 'react';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';
import SanityBlockContent from '@sanity/block-content-to-react';

// --> Project Imports
import { Button, FAQ, FAQItem, CurveGraphic } from 'components';
import { MOWER } from 'icons';

// --> Component Imports
import style from './serviceInfo.module.scss';

export default function ServiceInfoSection({ service = null }) {
	return (
		service && (
			<section className={style.SectionWrapper}>
				<Container>
					<Grid>
						<Grid.Row>
							<Grid.Column mobile={16} tablet={9} computer={10} className={style.Body}>
								<SanityBlockContent blocks={service.body} />
								<Button selfCenter space='10xy' icon={MOWER} color='secondary'>
									Get Estimate
								</Button>
							</Grid.Column>
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
						</Grid.Row>
					</Grid>
					<CurveGraphic pos='bottom' />
				</Container>
			</section>
		)
	);
}
