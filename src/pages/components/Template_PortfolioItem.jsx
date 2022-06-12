// --> React
import React from 'react';
import { useParams } from 'react-router-dom';

// --> Project Imports
import { Loading, ServicesSection, PortfolioItemContent, Slider } from 'components';
import ViewWrapper from './ViewWrapper.jsx';
import { fetchPortfolioItem } from 'groq.js';

export default function PortfolioItemTemplatePage() {
	const [portfolioItem, setPortfolioItem] = React.useState(null);
	const { slug } = useParams();

	React.useEffect(() => {
		fetchPortfolioItem(slug)
			.then((data) => (!data ? null : setPortfolioItem(data)))
			.catch(console.error);
	}, [slug]);
	return !portfolioItem ? (
		<Loading size='screen' />
	) : (
		<ViewWrapper>
			<Slider srcUrls={portfolioItem.photos.map((photo) => photo.asset.url)} />
			<PortfolioItemContent portfolioItem={portfolioItem} />
			<ServicesSection />
		</ViewWrapper>
	);
}
