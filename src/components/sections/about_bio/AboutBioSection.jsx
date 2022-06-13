// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container } from 'semantic-ui-react';
import SanityBlockContent from '@sanity/block-content-to-react';

// --> Project Imports
import { Button } from 'components';
import { LEAF } from 'icons';
import { ESTIMATE } from 'routes';

// Local Styling
import style from './aboutBioSection.module.scss';

export default function AboutBioSection({ content }) {
	return (
		<section className={style.SectionWrapper}>
			<Container>
				<h1>{content.bioHeader && content.bioHeader}</h1>
				<SanityBlockContent blocks={content.bio} />
				<Link to={ESTIMATE}>
					<Button icon={LEAF} color='primary' selfCenter>
						Get Estimate
					</Button>
				</Link>
			</Container>
		</section>
	);
}
