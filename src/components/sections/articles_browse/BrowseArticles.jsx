// --> React
import React from 'react';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Project Imports
import { ArticleCard, BrowseFilters } from 'components';
import { ARTICLES } from 'routes';
import sanityClient from 'sanityClient';

// --> Component Imports
import Style from './browseArticles.module.scss';

export default function BrowseArticles() {
	const [articles, setArticles] = React.useState(null);
	const [activeFilters, setActiveFilters] = React.useState([]);

	React.useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'article']{
				title,
				slug,
				shortSummary,
				tags[]->{
					title
				},
				mainImage {
					asset->{
						_id,
						url
					}
				}
			}`
			)
			.then((data) => {
				setArticles(data);
			})
			.catch(console.error);
	}, []);

	console.log({ activeFilters });

	console.log(articles);
	return (
		<Container className={Style.SectionWrapper}>
			{articles && <BrowseFilters items={articles} setActiveCallback={setActiveFilters} />}
			<ArticleCard.CardGroup>
				{articles &&
					articles.map((article, i) =>
						BrowseFilters.itemHasActiveTag(activeFilters, article.tags) || activeFilters.length < 1 ? (
							<ArticleCard
								key={`${article.slug.current}_${i}`}
								to={`${ARTICLES}/${article.slug.current}`}
								backgroundImage={article.mainImage.asset.url}
								title={article.title}
								summary={article.shortSummary}
								linkText='Read Article'
							/>
						) : null
					)}
			</ArticleCard.CardGroup>
		</Container>
	);
}
