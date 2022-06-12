// --> React
import React from 'react';

// --> Project Imports
import { PageHeader, PortfolioBrowse } from 'components';
import { backgroundWorker } from 'assets';

// Component Import
import ViewWrapper from './ViewWrapper';

export default function ExploreWorkPage() {
	return (
		<ViewWrapper>
			<PageHeader title='Explore Our Work' image={backgroundWorker} imgPos='top' />
			<PortfolioBrowse />
		</ViewWrapper>
	);
}
