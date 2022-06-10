// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Project Imports
import { placeholderMowing, placeholderTileGrass } from '../../../assets';
import { Button, ArticleCard } from '../../../components';
import { ARTICLES } from '../../../routes';

// --> Styling
import style from './learnLawnCare.module.scss';

export default function LearnLawnCareSection({ picture = false }) {
	const backgroundPic = picture ? `url(${placeholderMowing})` : '';
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
					<ArticleCard
						to={`${ARTICLES}/8173623`}
						title='Grass Health'
						linkText='Read Article'
						backgroundImage={placeholderTileGrass}
						summary='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque '
					/>

					<ArticleCard
						to={`${ARTICLES}/8173623`}
						title='Grass Health'
						linkText='Read Article'
						backgroundImage={placeholderTileGrass}
						summary='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque '
					/>
				</ArticleCard.CardGroup>

				<Button as={Link} to={ARTICLES} color='secondary'>
					Browse All Articles
				</Button>
			</Container>
		</section>
	);
}
