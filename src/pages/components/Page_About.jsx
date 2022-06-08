// --> React
import React from 'react';

// --> Project Imports
import { LearnLawnCareSection, HappyClientsSection, AboutHeaderSection, AboutBioSection } from '../../components';
import ViewWrapper from './ViewWrapper';

export default function AboutPage() {
	return (
		<ViewWrapper>
			<AboutHeaderSection />
			<AboutBioSection />s
			<HappyClientsSection />
			<LearnLawnCareSection />
		</ViewWrapper>
	);
}
