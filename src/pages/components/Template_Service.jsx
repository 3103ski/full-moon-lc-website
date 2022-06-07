// --> React
import React from 'react';

// --> Project Imports
import { PageHeader, ServiceInfoSection, ServicesSection, Footer } from '../../components';
import { placeholderBlowingLeaves } from '../../assets';

import MotionWrapper from '../AnimateWrapper.jsx';

export default function ServiceTemplatePage() {
	return (
		<MotionWrapper>
			<PageHeader
				size='lg'
				title='Property Cleanup'
				sub={'Prevent Hazards. Look Fresh'}
				image={placeholderBlowingLeaves}
			/>
			<ServiceInfoSection />
			<ServicesSection />
			<Footer />
		</MotionWrapper>
	);
}
