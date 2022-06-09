// --> React
import React from 'react';

// --> Project Imports
import { PageHeader, ServiceInfoSection, ServicesSection } from 'components';
import { placeholderBlowingLeaves } from 'assets';
import ViewWrapper from './ViewWrapper';

export default function ServiceTemplatePage() {
	return (
		<ViewWrapper>
			<PageHeader
				size='lg'
				title='Property Cleanup'
				sub={'Prevent Hazards. Look Fresh'}
				image={placeholderBlowingLeaves}
			/>
			<ServiceInfoSection />
			<ServicesSection />
		</ViewWrapper>
	);
}
