// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Project Imports
import { placeholderMowing, placeholderTileGrass } from '../../../../assets';
import { Button, CardLink } from '../../../../components/';
import { ARTICLES } from '../../../../routes';

// --> Styling
import style from './learnLawnCare.module.scss';

export default function LearnLawnCareSection() {
	return (
		<section className={style.SectionLearnLawn} style={{ backgroundImage: `url(${placeholderMowing})` }}>
			<div className={style.ImageOverlay} />
			<Container className={style.Content}>
				<h1 className={style.Title}>LEARN ABOUT LAWN CARE</h1>
				<h3 className={style.Sub}>Find out tips that can save you money & keep your property looking fresh!</h3>
				<div className={style.Tiles}>
					<CardLink
						to='/articles'
						title='Grass Health'
						linkText='Read Article'
						backgroundImage={placeholderTileGrass}
						summary='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque '
					/>

					<CardLink
						to='/articles'
						title='Grass Health'
						linkText='Read Article'
						backgroundImage={placeholderTileGrass}
						summary='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque '
					/>
				</div>
				<Button as={Link} to={ARTICLES} color='secondary'>
					Browse All Articles
				</Button>
			</Container>
		</section>
	);
}
