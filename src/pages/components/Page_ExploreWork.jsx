// --> React
import React from 'react';

// --> Project Imports
import { PageHeader, Footer } from '../../components';
import { backgroundWorker } from '../../assets';

import MotionWrapper from '../AnimateWrapper.jsx';

export default function ExploreWorkPage() {
	return (
		<MotionWrapper>
			<PageHeader title='Explore Our Work' image={backgroundWorker} imgPos='top' />
			<Footer />
		</MotionWrapper>
	);
}
