// --> React
import React from 'react';

// --> Project Imports
import { PageHeader } from 'components';
import { backgroundHouse } from 'assets';
import ViewWrapper from './ViewWrapper';

export default function VideosPage() {
	return (
		<ViewWrapper>
			<PageHeader title='Videos' sub='Watch us work & get inspired' image={backgroundHouse} imgPos='bottom' />
		</ViewWrapper>
	);
}
