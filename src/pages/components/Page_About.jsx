// --> React
import React from 'react';

// --> Project Imports
import { LearnLawnCareSection, HappyClientsSection, AboutHeaderSection, AboutBioSection, Loading } from 'components';
import ViewWrapper from './ViewWrapper';
import { fetchAboutPageInfo } from 'groq';

export default function AboutPage() {
	const [content, setContent] = React.useState(null);

	React.useEffect(() => {
		fetchAboutPageInfo()
			.then((data) => setContent(data))
			.catch(console.error);
	}, []);

	return !content ? (
		<Loading size='screen' />
	) : (
		<ViewWrapper>
			<AboutHeaderSection content={content} />
			<AboutBioSection content={content} />
			<HappyClientsSection />
			<LearnLawnCareSection />
		</ViewWrapper>
	);
}
