// --> React
import React from 'react';

// --> Project Imports
import { TextInput, Button } from 'components';

// --> Component Imports
import Style from './estimateForm.module.scss';

export default function EstimateForm() {
	return (
		<form
			className={`ui form ${Style.Form}`}
			method='post'
			data-netlify='true'
			name='request-estimate'
			action='/videos'>
			<input type='hidden' name='form-name' value='request-estimate' />
			<TextInput placeholder='Your Name' name='name' />
			<TextInput placeholder='Phone Number' name='phone' />
			<div>
				<p>something</p>
				<input type='checkbox' name='mowing' />
			</div>
			<div>
				<p>another</p>
				<input type='checkbox' name='gardening' />
			</div>
			<Button type='submit' fluid>
				Send
			</Button>
		</form>
	);
}
