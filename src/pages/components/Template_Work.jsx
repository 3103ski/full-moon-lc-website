// --> React
import React from 'react';
import { useParams } from 'react-router-dom';

// --> Project Imports
import { Loading, ServicesSection, WorkContent, Slider } from 'components';
import ViewWrapper from './ViewWrapper.jsx';
import { fetchPortfolioItem } from 'groq.js';

export default function WorkTemplatePage() {
	const [workItem, setWorkItem] = React.useState(null);
	const { slug } = useParams();

	React.useEffect(() => {
		fetchPortfolioItem(slug)
			.then((data) => (!data ? null : setWorkItem(data)))
			.catch(console.error);
	}, [slug]);

	return !workItem ? (
		<Loading size='screen' />
	) : (
		<ViewWrapper>
			<Slider srcUrls={workItem.photos.map((photo) => photo.asset.url)} />
			<WorkContent workItem={workItem} />
			<ServicesSection />
		</ViewWrapper>
	);
}
