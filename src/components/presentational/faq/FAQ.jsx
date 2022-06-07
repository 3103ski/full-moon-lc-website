// --> React
import React from 'react';

// --> Project Imports
import { Button } from '../../../components';
import { MONEY } from '../../../iconify';
import FAQItem from './faqItem/FAQItem.jsx';

// --> Local Styling
import style from './faq.module.scss';

export default function FAQ({ children }) {
	return (
		<div className={style.Wrapper}>
			<div className={style.Header}>
				<h3>Frequently Asked Questions</h3>
			</div>
			<div className={style.Content}>
				<FAQItem.ItemContainer>{children}</FAQItem.ItemContainer>
				<Button icon={MONEY} thin selfCenter>
					Pricing
				</Button>
			</div>
		</div>
	);
}
