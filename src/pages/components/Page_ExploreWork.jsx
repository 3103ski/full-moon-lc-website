// --> React
import React from 'react';

// --> Project Imports
import { PageHeader } from '../../components';
import { backgroundWorker } from '../../assets';
import ViewWrapper from './ViewWrapper';

export default function ExploreWorkPage() {
	return (
		<ViewWrapper>
			<PageHeader title='Explore Our Work' image={backgroundWorker} imgPos='top' />
		</ViewWrapper>
	);
}
