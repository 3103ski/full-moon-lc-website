// --> React
import React from 'react';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Project Imports
import { Loading, ArticleCard, BrowseFilters } from 'components';
import { OUR_WORK } from 'routes';
import { fetchPortfolioItems } from 'groq';
import { checkSeshStorageAddIfNeeded } from 'util';

// --> Component Imports
import Style from './browsePortfolio.module.scss';

export default function PortfolioBrowse() {
	const [portfolioItems, setPortfolioItems] = React.useState(null);
	const [activeFilters, setActiveFilters] = React.useState([]);

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded('fmlc__portfolioBrowse', setPortfolioItems, fetchPortfolioItems);
	}, []);

	return !portfolioItems ? (
		<Loading size='small' />
	) : (
		<Container as='section' className={Style.SectionWrapper}>
			<BrowseFilters items={portfolioItems} notTag='services' setActiveCallback={setActiveFilters} />
			<ArticleCard.CardGroup>
				{portfolioItems.map((item, i) =>
					activeFilters.length > 0 && !BrowseFilters.itemHasActiveTag(activeFilters, item.services) ? null : (
						<ArticleCard
							key={`${item.slug.current}_${i}`}
							to={`${OUR_WORK}/${item.slug.current}`}
							title={item.title}
							backgroundImage={item.photos[0].asset.url}
							summary={item.shortSummary}
							linkText='See Work'
						/>
					)
				)}
			</ArticleCard.CardGroup>
		</Container>
	);
}
