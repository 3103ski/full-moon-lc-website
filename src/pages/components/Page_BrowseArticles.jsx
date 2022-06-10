// --> React
import React from 'react';

// --> Project Imports
import { PageHeader, BrowseArticlesSection } from 'components';

import { backgroundHouse } from 'assets';

// --> Component Imports
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
			<BrowseArticlesSection />
		</ViewWrapper>
	);
}
