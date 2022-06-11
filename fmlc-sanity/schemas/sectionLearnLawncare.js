export default {
	name: 'sectionLearnLawncare',
	title: 'Section - Learn Lawn Care',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Section Title',
			type: 'string',
			validation: (Rule) => Rule.required().max(30),
		},
		{
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
			validation: (Rule) => Rule.required().max(80),
		},
		{
			name: 'articles',
			title: 'Visible Articles',
			type: 'document',
			fields: [
				{
					name: 'articleOne',
					title: 'Article One',
					type: 'reference',
					to: { type: 'article' },
				},
				{
					name: 'articleTwo',
					title: 'Article Two',
					type: 'reference',
					to: { type: 'article' },
				},
			],
		},
	],
};
