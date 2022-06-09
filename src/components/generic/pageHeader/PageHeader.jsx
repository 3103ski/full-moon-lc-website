// --> React
import React from 'react';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Component Imports
import style from './pageHeader.module.scss';

export default function PageHeader({
	title = 'Enter A Title',
	size = 'med',
	sub = null,
	image = '',
	imgPos = 'center',
}) {
	return (
		<header
			className={style.HeaderSection}
			data-size={size}
			style={{ backgroundImage: `url(${image})` }}
			data-bg-pos={imgPos}>
			<div className={style.Overlay} />
			<Container className={style.Inner}>
				<h1 className={style.Title}>{title}</h1>
				{sub ? <h3 className={style.Sub}>{sub}</h3> : null}
			</Container>
		</header>
	);
}
