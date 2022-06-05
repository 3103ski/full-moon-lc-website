// --> React
import React from 'react';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Project Imports
import { Button } from '../../../components';
import { MOWER } from '../../../iconify';

// Local Styling
import style from './aboutBioSection.module.scss';

export default function AboutBioSection() {
	return (
		<section className={style.SectionWrapper}>
			<Container>
				<h1>doloremque laudantium, totam</h1>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
					totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
					dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
					sed quia consequuntur
				</p>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
					totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
					dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
					sed quia consequuntur
				</p>
				<Button icon={MOWER} color='primary' selfCenter>
					Get Estimate
				</Button>
			</Container>
		</section>
	);
}
