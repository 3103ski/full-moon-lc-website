// --> React
import React from 'react';

// --> Project Imports
import { Button, Card } from 'components';
import { MONEY } from 'iconify';

// --> Component Imports
import FAQItem from './faqItem/FAQItem.jsx';

export default function FAQ({ children }) {
	return (
		<Card title={'Frequently Asked Question'}>
			<FAQItem.ItemContainer>{children}</FAQItem.ItemContainer>
			<Button icon={MONEY} thin selfCenter>
				Pricing
			</Button>
		</Card>
	);
}
