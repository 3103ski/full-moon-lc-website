// --> React
import React from 'react';

// --> Project Imports
import { Modal, LayoutIcon, Button } from 'components';
import { ARROW_RIGHT } from 'icons';

// --> Component Imports
import Style from './faqItem.module.scss';

export default function FAQItem({ question, answer, useIcon = null, icon = ARROW_RIGHT, iconColor = 'black' }) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<div className={Style.QuestionWrapper} onClick={() => setIsOpen(true)}>
				{useIcon ? <LayoutIcon icon={icon} color={iconColor} /> : null}
				<p className={Style.Question}>{question}</p>
			</div>
			<Modal isOpen={isOpen} callback={setIsOpen} title={question}>
				<p className={Style.Answer}>{answer}</p>
				<Button selfCenter onClick={() => setIsOpen(false)}>
					Got It
				</Button>
			</Modal>
		</>
	);
}

FAQItem.ItemContainer = ({ children }) => <div className={Style.ItemContainer}>{children}</div>;
