// --> React
import React from 'react';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Project Imports
import { ArticleCard } from 'components';
import { ARTICLES } from 'routes';
import sanityClient from 'sanityClient';

// --> Component Imports
import Style from './browseArticles.module.scss';

export default function BrowseArticles() {
	const [articles, setArticles] = React.useState(null);

	React.useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'article']{
				title,
				slug,
				shortSummary,
				mainImage {
					asset->{
						_id,
						url
					}
				}
			}`
			)
			.then((data) => setArticles(data))
			.catch(console.error);
	}, []);
	return (
		<Container className={Style.SectionWrapper}>
			<ArticleCard.CardGroup>
				{articles &&
					articles.map((article, i) => (
						<ArticleCard
							key={`${article.slug.current}_${i}`}
							to={`${ARTICLES}/${article.slug.current}`}
							backgroundImage={article.mainImage.asset.url}
							title={article.title}
							summary={article.shortSummary}
							linkText='Read Article'
						/>
					))}
			</ArticleCard.CardGroup>
		</Container>
	);
}
