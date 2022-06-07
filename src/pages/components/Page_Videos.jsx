// --> React
import React from 'react';

// --> Project Imports
import { PageHeader, Footer } from '../../components';
import { backgroundHouse } from '../../assets';

import MotionWrapper from '../AnimateWrapper.jsx';

export default function VideosPage() {
	return (
		<MotionWrapper>
			<PageHeader title='Videos' sub='Watch us work & get inspired' image={backgroundHouse} imgPos='bottom' />
			<Footer />
		</MotionWrapper>
	);
}
