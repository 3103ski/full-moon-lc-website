export default {
	name: 'bannerArticles',
	title: 'Learn Lawn Care Section',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Group Title',
			type: 'string',
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
