import React from 'react';

import {
	HomeLandingSection,
	ProfLawnCareSection,
	LearnLawnCareSection,
	ServicesSection,
	HappyClientsSection,
	Footer,
} from '../../components';

import MotionWrapper from '../AnimateWrapper.jsx';

export default function HomePage() {
	return (
		<MotionWrapper>
			<HomeLandingSection />
			<ProfLawnCareSection />
			<LearnLawnCareSection picture />
			<ServicesSection />
			<HappyClientsSection />
			<Footer />
		</MotionWrapper>
	);
}
