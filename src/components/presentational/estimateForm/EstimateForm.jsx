// --> React
import React from 'react';

// Packages
// import { Form } from 'semantic-ui-react';

// --> Project Imports
import { TextInput, TextArea, Button } from 'components';
// import { useForm } from 'hooks';

// --> Component Imports
import Style from './estimateForm.module.scss';

export default function EstimateForm() {
	return (
		<form className={`ui form ${Style.Form}`} method='post' data-netlify='true' name='resquest-estimate' action='/'>
			<TextInput placeholder='Your Name' name='name' />
			<TextInput placeholder='Phone Number' name='phone' />
			<TextArea placeholder='Message' name='message' />
			<Button type='submit' fluid>
				Send
			</Button>
		</form>
	);
}
