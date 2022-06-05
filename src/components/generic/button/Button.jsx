import React from 'react';
import { Icon } from '@iconify/react';

import { Button } from 'semantic-ui-react';
import style from './button.module.scss';

export default function CustomButton({
	color = 'primary',
	txtcolor = 'light',
	icon = null,
	thin = null,
	selfCenter = null,
	children,
	...rest
}) {
	return (
		<Button
			data-color={color}
			data-txt-color={txtcolor}
			data-thin={thin ? '1' : '0'}
			data-self-center={selfCenter ? 1 : 0}
			className={style.Button}
			{...rest}>
			{icon ? <Icon icon={icon} /> : null}
			{children}
		</Button>
	);
}
