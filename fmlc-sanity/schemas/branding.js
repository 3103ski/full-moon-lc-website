export default {
	name: 'branding',
	title: 'Admin - Branding',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'img',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
