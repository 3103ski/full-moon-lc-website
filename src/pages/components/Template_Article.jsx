// --> React
import React from 'react';

// --> Project Imports
import { PageHeader, Footer } from '../../components';
import { placeholderArticleHeader } from '../../assets';

import MotionWrapper from '../AnimateWrapper.jsx';

export default function ArticleTemplatePage() {
	return (
		<MotionWrapper>
			<PageHeader title='Grass Health' sub='Things to know' image={placeholderArticleHeader} size='lg' />
			<Footer />
		</MotionWrapper>
	);
}
