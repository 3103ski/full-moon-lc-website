export default {
	name: 'sectionServices',
	title: 'Section - Services You Need',
	type: 'document',
	fields: [
		{
			name: 'titleTop',
			title: 'Title Top',
			type: 'string',
			validation: (Rule) => Rule.required().max(15),
		},
		{
			name: 'titleBottom',
			title: 'Title Bottom',
			type: 'string',
			validation: (Rule) => Rule.required().max(15),
		},
		{
			name: 'subtitle',
			title: 'Service Subtitle',
			type: 'string',
			validation: (Rule) => Rule.max(80),
		},
		{
			name: 'services',
			title: 'Top Services',
			type: 'document',
			fields: [
				{
					name: 'serviceOne',
					title: 'Slot One',
					type: 'reference',
					to: { type: 'service' },
				},
				{
					name: 'serviceTwo',
					title: 'Slot Two',
					type: 'reference',
					to: { type: 'service' },
				},
				{
					name: 'serviceThree',
					title: 'Slot Two',
					type: 'reference',
					to: { type: 'service' },
				},
				{
					name: 'serviceFour',
					title: 'Slot Two',
					type: 'reference',
					to: { type: 'service' },
				},
			],
		},
	],
};
