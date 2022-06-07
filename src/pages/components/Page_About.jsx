// --> React
import React from 'react';

// --> Project Imports
import {
	LearnLawnCareSection,
	HappyClientsSection,
	AboutHeaderSection,
	AboutBioSection,
	Footer,
} from '../../components';

import MotionWrapper from '../AnimateWrapper.jsx';

export default function AboutPage() {
	return (
		<MotionWrapper>
			<AboutHeaderSection />
			<AboutBioSection />s
			<HappyClientsSection />
			<LearnLawnCareSection />
			<Footer />
		</MotionWrapper>
	);
}
