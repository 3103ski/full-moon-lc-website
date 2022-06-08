// --> React
import React from 'react';

// --> Project Imports
import { PageHeader, ArticleContentSection } from '../../components';
import { placeholderArticleHeader } from '../../assets';
import ViewWrapper from './ViewWrapper';

export default function ArticleTemplatePage() {
	return (
		<ViewWrapper>
			<PageHeader title='Grass Health' sub='Things to know' image={placeholderArticleHeader} size='lg' />
			<ArticleContentSection />
		</ViewWrapper>
	);
}
