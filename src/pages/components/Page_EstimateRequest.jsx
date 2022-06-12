// --> React
import React from 'react';

// --> Project Imports
import { EstimateFormSection, PageHeader } from 'components';

// Component Imports
import ViewWrapper from './ViewWrapper';

export default function EstimateRequestPage() {
	return (
		<ViewWrapper>
			<PageHeader title='Estimate Request' sub={'Fill out the form below and our staff will get back to you'} />
			<EstimateFormSection />
		</ViewWrapper>
	);
}
