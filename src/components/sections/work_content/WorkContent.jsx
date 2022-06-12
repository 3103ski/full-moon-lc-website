// --> React
import React from 'react';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';
import SanityBlockContent from '@sanity/block-content-to-react';

// --> Project Imports
import { FAQItem, FAQ, Button, CurveGraphic } from 'components';
import { MOWER } from 'icons';

// --> Component Imports
import Style from './workContent.module.scss';

export default function WorkTemplateContent({ workItem }) {
	return (
		<section className={Style.SectionOuter}>
			<Container className={Style.SectionInner}>
				<Grid>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={8} computer={10} className={Style.Body}>
							<h1>{workItem.title}</h1>
							{workItem.subtitle && <h3>{workItem.subtitle}</h3>}

							<SanityBlockContent blocks={workItem.body} />
							<Button selfCenter space='10xy' icon={MOWER} color='secondary'>
								Get Estimate
							</Button>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={6}>
							<FAQ>
								{workItem.faqs.map((item, i) => (
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
			</Container>
			<CurveGraphic pos='bottom' />
		</section>
	);
}
