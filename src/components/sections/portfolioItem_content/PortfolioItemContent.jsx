// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';
import SanityBlockContent from '@sanity/block-content-to-react';

// --> Project Imports
import { FAQItem, FAQ, Button, CurveGraphic } from 'components';
import { MOWER } from 'icons';
import { ESTIMATE, SERVICE } from 'routes';

// --> Component Imports
import Style from './portfolioItemContent.module.scss';

export default function WorkTemplateContent({ portfolioItem }) {
	return (
		<section className={Style.SectionOuter}>
			<Container className={Style.SectionInner}>
				<Grid>
					<Grid.Row>
						<Grid.Column
							mobile={16}
							tablet={!portfolioItem.faqs || portfolioItem.faqs.length === 0 ? 16 : 8}
							computer={!portfolioItem.faqs || portfolioItem.faqs.length === 0 ? 16 : 10}
							className={Style.Body}>
							<div className={Style.ServicesProvidedContainer}>
								<p>Services Provided</p>
								<div className={Style.TagContainer}>
									{portfolioItem.services.map((service, i) => (
										<Link
											to={`${SERVICE}/${service.slug.current}`}
											key={`${service.title}_${i}`}
											className={Style.ServiceTag}>
											<p>{service.title}</p>
										</Link>
									))}
								</div>
							</div>
							<h1>{portfolioItem.title}</h1>
							{portfolioItem.subtitle && <h3>{portfolioItem.subtitle}</h3>}
							<SanityBlockContent blocks={portfolioItem.body} />
							<Link to={ESTIMATE}>
								<Button selfCenter space='10xy' icon={MOWER} color='secondary'>
									Get Estimate
								</Button>
							</Link>
						</Grid.Column>
						{!portfolioItem.faqs || portfolioItem.faqs.length === 0 ? null : (
							<Grid.Column mobile={16} tablet={8} computer={6}>
								<FAQ>
									{portfolioItem.faqs.map((item, i) => (
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
			</Container>
			<CurveGraphic pos='bottom' />
		</section>
	);
}
