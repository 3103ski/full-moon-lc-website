// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { ArticleCard, Button, CurveGraphic } from 'components';
import { mascotCleanup1000, stockHome } from 'assets';
import { fetchServicesSectionContent } from 'groq';
import { ESTIMATE, SERVICE, VIDEOS } from 'routes';
import { LEAF, YOUTUBE } from 'icons';
import { checkSeshStorageAddIfNeeded } from 'util';

// --> Component Imports
import Style from './servicesSection.module.scss';

export default function ServicesSection() {
	const [content, setContent] = React.useState(null);

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded(`fmlc_servicessection__content`, setContent, fetchServicesSectionContent);
	}, []);

	return (
		content && (
			<section className={Style.SectionWrapper} style={{ backgroundImage: `url(${stockHome})` }}>
				<CurveGraphic pos='top' />
				<Container className={Style.SectionInner}>
					<Grid className={Style.SectionDetails}>
						<Grid.Row>
							<Grid.Column mobile={16} computer={9}>
								<div className={Style.Title}>
									<h1>{content.titleTop}</h1>
									<h1>{content.titleBottom}</h1>
									<img
										className={Style.ServiceGraphicMobile}
										src={mascotCleanup1000}
										alt='Full Moon Mascot Cleanup Service'
									/>
								</div>
								<p className={Style.Description}>{content.subtitle}</p>

								<div className={Style.ButtonsWrapper}>
									<Button space={'10x'} as={Link} to={VIDEOS} icon={YOUTUBE}>
										Videos
									</Button>
									<Button as={Link} to={ESTIMATE} space={'10x'} icon={LEAF}>
										Request Quote
									</Button>
								</div>
							</Grid.Column>

							<Grid.Column only='computer' computer={7}>
								<img
									className={Style.ServiceGraphic}
									src={mascotCleanup1000}
									alt='Full Moon Mascot Cleanup Service'
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>

					<ArticleCard.CardGroup>
						{Object.values(content.services).map(
							(service, i) =>
								i < 4 && (
									<ArticleCard
										to={`${SERVICE}/${service.slug.current}`}
										key={`${i}__${service.slug.current}`}
										title={service.title}
										summary={service.shortSummary}
										backgroundImage={service.mainImage.asset.url}
										linkText='Learn More'
									/>
								)
						)}
					</ArticleCard.CardGroup>

					<Grid>
						<Grid.Row>
							<Grid.Column mobile={16} only='mobile'>
								<Button.FluidWrapper>
									<Button fluid space={'10y'} as={Link} to={VIDEOS} icon={YOUTUBE}>
										Videos
									</Button>
									<Button as={Link} to={ESTIMATE} fluid icon={LEAF}>
										Request Quote
									</Button>
								</Button.FluidWrapper>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</section>
		)
	);
}
