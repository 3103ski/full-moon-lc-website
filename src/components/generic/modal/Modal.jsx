// --> React
import React from 'react';

// --> Packages
import { Modal as SUIModal, Header } from 'semantic-ui-react';

// --> Local Styling
import style from './modal.module.scss';

export default function Modal({ title, body, isOpen, callback, children }) {
	return (
		<SUIModal className={style.Modal} dimmer='blurring' closeIcon open={isOpen} onClose={() => callback(false)}>
			<Header className={style.Header}>{<h1 className={style.Title}>{title}</h1>}</Header>
			<SUIModal.Content className={style.ContentWrapper}>{children}</SUIModal.Content>
		</SUIModal>
	);
}
