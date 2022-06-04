import React from 'react';

import { Icon } from '@iconify/react';

import style from './button.module.scss';

export default function Button({ icon = null, color = 'primary', txtcolor = 'light', children }) {
	return (
		<button data-color={color} data-txt-color={txtcolor} className={style.Button}>
			{icon ? <Icon icon={icon} /> : null}
			{children}
		</button>
	);
}
