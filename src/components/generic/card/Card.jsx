// --> React
import React from 'react';

// --> Local Styling
import style from './card.module.scss';

export default function Card({ title, flow = 'col', children }) {
	return (
		<div className={style.Wrapper}>
			<div className={style.Header}>
				<h3>{title}</h3>
			</div>
			<div className={style.Content} data-flow={flow}>
				{children}
			</div>
		</div>
	);
}
