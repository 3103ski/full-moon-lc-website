// --> React
import React from 'react';

// --> Project Imports
import { Modal, LayoutIcon, Button } from '../../../../components';
import { ARROW_RIGHT } from '../../../../iconify';

// --> Local Styling
import style from './faqItem.module.scss';

export default function FAQItem({ question, answer, useIcon = null, icon = ARROW_RIGHT, iconColor = 'black' }) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<div className={style.QuestionWrapper} onClick={() => setIsOpen(true)}>
				{useIcon ? <LayoutIcon icon={icon} color={iconColor} /> : null}
				<p className={style.Question}>{question}</p>
			</div>
			<Modal isOpen={isOpen} callback={setIsOpen} title={question}>
				<p className={style.Answer}>{answer}</p>
				<Button selfCenter onClick={() => setIsOpen(false)}>
					Got It
				</Button>
			</Modal>
		</>
	);
}

FAQItem.ItemContainer = ({ children }) => <div className={style.ItemContainer}>{children}</div>;
