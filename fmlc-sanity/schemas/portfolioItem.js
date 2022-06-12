export default {
	name: 'portfolioItem',
	title: 'Portfolio Items',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required().max(30),
		},
		{
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
			validation: (Rule) => Rule.max(30),
		},
		{
			name: 'shortSummary',
			title: 'Short Summary',
			type: 'string',
			validation: (Rule) => Rule.max(100),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'photos',
			title: 'Photos',
			type: 'array',
			of: [{ type: 'image' }],
			validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			name: 'faqs',
			title: 'Frequently Asked Questions',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'faq' } }],
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'tag' } }],
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
	],
};
