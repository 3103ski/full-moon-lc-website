// --> React
import React from 'react';

// --> Project Imports
import { PageHeader, BrowsePortfolio } from 'components';
import { backgroundWorker } from 'assets';

// Component Import
import ViewWrapper from './ViewWrapper';

export default function BrowsePortfolioPage() {
	return (
		<ViewWrapper>
			<PageHeader title='Explore Our Work' image={backgroundWorker} imgPos='top' />
			<BrowsePortfolio />
		</ViewWrapper>
	);
}
