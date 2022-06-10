import SanityClient from '@sanity/client';

export default SanityClient({
	projectId: '0p8ww3sh',
	dataset: 'production',
	apiVersion: 'v2021-08-31',
	useCdn: true,
});
