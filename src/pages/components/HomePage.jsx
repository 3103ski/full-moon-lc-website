import React from 'react';

import { HomeLandingSection, ProfLawnCareSection, LearnLawnCareSection, ServicesSection } from '../../components';

export default function HomePage() {
	return (
		<>
			<HomeLandingSection />
			<ProfLawnCareSection />
			<LearnLawnCareSection picture />
			<ServicesSection />
		</>
	);
}
