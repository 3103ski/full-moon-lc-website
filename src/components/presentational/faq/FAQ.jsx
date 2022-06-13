// --> React
import React from 'react';

// --> Project Imports
import { Card } from 'components';

// --> Component Imports
import FAQItem from './faqItem/FAQItem.jsx';

export default function FAQ({ children }) {
	return (
		<Card title={'Frequently Asked Question'}>
			<FAQItem.ItemContainer>{children}</FAQItem.ItemContainer>
		</Card>
	);
}
