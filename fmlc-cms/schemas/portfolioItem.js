export default {
	name: 'portfolioItem',
	title: 'CMS - Portfolio',
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
			name: 'services',
			title: 'Services Provided',
			type: 'array',
			validation: (Rule) => Rule.required().min(1),
			of: [{ type: 'reference', to: { type: 'service' } }],
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
	],
};
