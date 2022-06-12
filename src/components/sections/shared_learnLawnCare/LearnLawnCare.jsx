// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Project Imports
import { placeholderMowing } from 'assets';
import { Button, ArticleCard } from 'components';
import { ARTICLES } from 'routes';
import { fetchLearnLawnCareSectionArticles } from 'groq';

// --> Styling
import style from './learnLawnCare.module.scss';

export default function LearnLawnCareSection({ picture = false }) {
	const backgroundPic = picture ? `url(${placeholderMowing})` : '';
	const [content, setContent] = React.useState(null);

	React.useEffect(() => {
		fetchLearnLawnCareSectionArticles()
			.then((data) => {
				if (data.length > 0) setContent(data[0]);
			})
			.catch(console.error);
	}, []);

	return (
		content && (
			<section
				className={style.SectionLearnLawn}
				data-picture={picture ? 1 : 0}
				style={{ backgroundImage: backgroundPic }}>
				<div className={style.Overlay} />
				<Container className={style.Content}>
					<h1 className={style.Title}>{content.title}</h1>
					<h3 className={style.Sub}>{content.subtitle}</h3>
					<ArticleCard.CardGroup>
						{Object.values(content.articles).includes(null)
							? null
							: Object.values(content.articles).map((article, i) => (
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
		)
	);
}
