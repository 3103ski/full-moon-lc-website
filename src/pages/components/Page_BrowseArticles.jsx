// --> React
import React from 'react';

// --> Project Imports
import { PageHeader } from '../../components/';
import { backgroundHouse } from '../../assets';
import ViewWrapper from './ViewWrapper';

export default function BrowseArticlesPage() {
	return (
		<ViewWrapper>
			<PageHeader
				title='Articles'
				sub='Learn with us. Grow with your yard.'
				image={backgroundHouse}
				imgPos='bottom'
			/>
		</ViewWrapper>
	);
}
