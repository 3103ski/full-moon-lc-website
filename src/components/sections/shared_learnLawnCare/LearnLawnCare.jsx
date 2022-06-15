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
import { checkSeshStorageAddIfNeeded } from 'util';

// --> Styling
import style from './learnLawnCare.module.scss';

export default function LearnLawnCareSection({ picture = false }) {
	const backgroundPic = picture ? `url(${placeholderMowing})` : '';
	const [content, setContent] = React.useState(null);
	const [isTablet, setIsTablet] = React.useState(null);
	const [yOffset, setYOffest] = React.useState(null);

	const handleScroll = React.useCallback(() => {
		let section = document.getElementById('learn-section').getBoundingClientRect();
		return section ? setYOffest(section.y) : null;
	}, []);

	React.useEffect(() => {
		const app = document.getElementById('app');
		app.addEventListener('scroll', handleScroll);
		return () => (app ? app.removeEventListener('scroll', handleScroll) : null);
	}, [handleScroll]);

	const sizeCheck = React.useCallback(() => {
		function isBelowCpuBreakpoint() {
			let vw = window.innerWidth;
			let limit = parseInt(style.bp_limit_tablet_top.split('px')[0]);

			if (vw < limit) return true;
			return false;
		}

		if (isBelowCpuBreakpoint()) {
			if (!isTablet) setIsTablet(true);
		} else {
			if (isTablet) setIsTablet(false);
		}
	}, [isTablet]);

	React.useEffect(() => {
		if (isTablet === null) {
			sizeCheck();
		}

		window.addEventListener('resize', sizeCheck);
		return () => window.removeEventListener('resize', sizeCheck);
	}, [isTablet, sizeCheck]);

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded(`fmlc_learnlawncare__content`, setContent, fetchLearnLawnCareSectionArticles);
	}, []);

	return (
		content && (
			<section
				className={style.SectionLearnLawn}
				id={'learn-section'}
				data-picture={picture ? 1 : 0}
				style={{
					backgroundImage: backgroundPic,
					backgroundPositionY: `${isTablet ? 0 : (yOffset / 1.5) * 0.8}px`,
				}}>
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
