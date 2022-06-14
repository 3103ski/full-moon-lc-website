// --> React
import React from 'react';

// --> Project Imports
import { LearnLawnCareSection, HappyClientsSection, AboutHeaderSection, AboutBioSection, Loading } from 'components';
import ViewWrapper from './ViewWrapper';
import { fetchAboutPageInfo } from 'groq';
import { checkSeshStorageAddIfNeeded } from 'util';

export default function AboutPage() {
	const [content, setContent] = React.useState(null);

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded(`fmlc_aboutpage`, setContent, fetchAboutPageInfo);
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
