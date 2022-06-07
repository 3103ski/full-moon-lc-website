// --> React
import React from 'react';

// --> Packages
import { Icon } from '@iconify/react';

// --> Local Styling
import style from './layoutIcon.module.scss';

export default function LayoutIcon({ icon = '', width = 30, color = 'black' }) {
	return (
		<div className={style.Wrapper} style={{ width: `${width}px` }} data-color={color}>
			<Icon icon={icon} style={{ fontSize: `${width - 5}px` }} />
		</div>
	);
}
