// --> React
import React from 'react';

// --> Component Imports
import Style from './estimateForm.module.scss';

export default function EstimateForm() {
	return (
		<form className={Style.Form}>
			<input type='text' plceholder='name' />
		</form>
	);
}
