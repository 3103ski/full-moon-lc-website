// --> React
import React from 'react';

// Project Imports
import ViewWrapper from './ViewWrapper';
import {
	HappyClientsSection,
	HomeLandingSection,
	LearnLawnCareSection,
	ProfLawnCareSection,
	ServicesSection,
} from '../../components';

export default function HomePage() {
	return (
		<ViewWrapper>
			<HomeLandingSection />
			<ProfLawnCareSection />
			<LearnLawnCareSection picture />
			<ServicesSection />
			<HappyClientsSection />
		</ViewWrapper>
	);
}
