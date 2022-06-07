// --> React
import React from 'react';

// --> Project Imports
import { PageHeader, Footer } from '../../components/';
import { backgroundHouse } from '../../assets';

import MotionWrapper from '../AnimateWrapper.jsx';

export default function BrowseArticlesPage() {
	return (
		<MotionWrapper>
			<PageHeader
				title='Articles'
				sub='Learn with us. Grow with your yard.'
				image={backgroundHouse}
				imgPos='bottom'
			/>
			<Footer />
			{/* <TopScroll /> */}
		</MotionWrapper>
	);
}
