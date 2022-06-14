export default {
	name: 'faq',
	title: 'CMS - FAQs',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'FAQ Title',
			type: 'string',
		},
		{
			name: 'question',
			title: 'Question',
			type: 'string',
		},
		{
			name: 'answer',
			title: 'Answer',
			type: 'blockContent',
		},
	],
};
