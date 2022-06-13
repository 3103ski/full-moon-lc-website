export default {
	name: 'service',
	title: 'CMS - Services',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required().max(20),
		},
		{
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
			validation: (Rule) => Rule.max(40),
		},
		{
			name: 'shortSummary',
			title: 'Short Summary',
			type: 'string',
			validation: (Rule) => Rule.required().max(150),
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
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
		},
		{
			name: 'graphic',
			title: 'Branding Graphic',
			type: 'reference',
			to: { type: 'branding' },
		},
		{
			name: 'faqs',
			title: 'FAQs',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'faq' } }],
		},
		{
			name: 'body',
			title: 'Body',
			validation: (Rule) => Rule.required(),
			type: 'blockContent',
		},
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
