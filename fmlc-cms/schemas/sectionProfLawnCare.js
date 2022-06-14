export default {
	name: 'sectionProfLawncare',
	title: 'Section - HomeBanner',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Section Title',
			type: 'string',
			validation: (Rule) => Rule.required().max(25),
		},
		{
			name: 'subtitle',
			title: 'Section Subtitle',
			type: 'string',
			validation: (Rule) => Rule.required().max(50),
		},
		{
			name: 'body',
			title: 'Bio Summary',
			type: 'blockContent',
		},
		{
			name: 'sectionPicture',
			title: 'Section Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
