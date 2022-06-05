import React from 'react';

import {
	HomeLandingSection,
	ProfLawnCareSection,
	LearnLawnCareSection,
	ServicesSection,
	HappyClientsSection,
} from '../../components';

export default function HomePage() {
	return (
		<>
			<HomeLandingSection />
			<ProfLawnCareSection />
			<LearnLawnCareSection picture />
			<ServicesSection />
			<HappyClientsSection />
		</>
	);
}
