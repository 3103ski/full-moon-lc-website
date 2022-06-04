import React from 'react';
import { Icon } from '@iconify/react';

import { Button } from 'semantic-ui-react';
import style from './button.module.scss';

export default function CustomButton({
	icon = null,
	color = 'primary',
	thin = null,
	txtcolor = 'light',
	children,
	...rest
}) {
	return (
		<Button
			data-color={color}
			data-txt-color={txtcolor}
			data-thin={thin ? '1' : '0'}
			className={style.Button}
			{...rest}>
			{icon ? <Icon icon={icon} /> : null}
			{children}
		</Button>
	);
}
