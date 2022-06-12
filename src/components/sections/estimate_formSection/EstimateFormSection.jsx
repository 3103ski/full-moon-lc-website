// --> React
import React from 'react';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Project Imports
import { EstimateForm } from 'components';

// --> Component Imports
import Style from './estimateFormSection.module.scss';

export default function EstimateFormSection() {
	return (
		<Container className={Style.Wrapper}>
			<EstimateForm />
		</Container>
	);
}
