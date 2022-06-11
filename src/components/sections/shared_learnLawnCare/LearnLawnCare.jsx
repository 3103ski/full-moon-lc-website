// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Project Imports
import { placeholderMowing } from 'assets';
import { Button, ArticleCard } from 'components';
import { ARTICLES } from 'routes';
import sanityClient from 'sanityClient';

// --> Styling
import style from './learnLawnCare.module.scss';

export default function LearnLawnCareSection({ picture = false }) {
	const backgroundPic = picture ? `url(${placeholderMowing})` : '';
	const [selectedArticles, setSelectedArticles] = React.useState(null);

	React.useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'bannerArticles']{
				articles{
					articleOne-> {
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
					},
					articleTwo-> {
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
					},
				}}`
			)
			.then((data) => console.log(data.length > 0 ? setSelectedArticles(Object.values(data[0].articles)) : null))
			.catch(console.error);
	}, []);
	return (
		<section
			className={style.SectionLearnLawn}
			data-picture={picture ? 1 : 0}
			style={{ backgroundImage: backgroundPic }}>
			<div className={style.Overlay} />
			<Container className={style.Content}>
				<h1 className={style.Title}>LEARN ABOUT LAWN CARE</h1>
				<h3 className={style.Sub}>Find out tips that can save you money & keep your property looking fresh!</h3>

				<ArticleCard.CardGroup>
					{selectedArticles &&
						selectedArticles.map((article, i) => (
							<ArticleCard
								to={`${ARTICLES}/${article.slug.current}`}
								key={`${article.title}_lms_${i}`}
								title={article.title}
								linkText='Read Article'
								backgroundImage={article.mainImage.asset.url}
								summary={article.shortSummary}
							/>
						))}
				</ArticleCard.CardGroup>

				<Button as={Link} to={ARTICLES} color='secondary'>
					Browse All Articles
				</Button>
			</Container>
		</section>
	);
}
