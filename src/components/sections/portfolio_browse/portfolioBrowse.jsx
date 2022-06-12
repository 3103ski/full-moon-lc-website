// --> React
import React from 'react';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Project Imports
import { Loading, ArticleCard, BrowseFilters } from 'components';
import { OUR_WORK } from 'routes';
import { fetchPortfolioItems } from 'groq';

// --> Component Imports
import Style from './portfolioBrowse.module.scss';

export default function PortfolioBrowse() {
	const [portfolioItems, setPortfolioItems] = React.useState(null);

	React.useEffect(() => {
		fetchPortfolioItems()
			.then((data) => {
				setPortfolioItems(data);
			})
			.catch(console.error);
	}, []);

	return !portfolioItems ? (
		<Loading size='small' />
	) : (
		<Container as='section' className={Style.SectionWrapper}>
			<BrowseFilters items={portfolioItems} />
			<ArticleCard.CardGroup>
				{portfolioItems.map((item, i) => (
					<ArticleCard
						key={`${item.slug.current}_${i}`}
						to={`${OUR_WORK}/${item.slug.current}`}
						title={item.title}
						backgroundImage={item.photos[0].asset.url}
						summary={item.shortSummary}
						linkText='See Work'
					/>
				))}
			</ArticleCard.CardGroup>
		</Container>
	);
}
