export default {
	name: 'about',
	title: 'Page - About',
	type: 'document',
	fields: [
		{
			name: 'headerText',
			title: 'Header Text',
			type: 'string',
		},
		// {
		// 	name: 'headerVideo',
		// 	title: 'Header Video URL',
		// 	type: 'url',
		// },
		{
			name: 'bioHeader',
			title: 'Bio Header',
			type: 'string',
		},
		{
			name: 'bio',
			title: 'Bio',
			type: 'blockContent',
		},
	],
};
