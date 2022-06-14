// --> React
import React from 'react';
import { useParams } from 'react-router-dom';

// --> Project Imports
import { Loading, ServicesSection, PortfolioItemContent, Slider } from 'components';
import { checkSeshStorageAddIfNeeded } from 'util';
import { fetchPortfolioItem } from 'groq.js';
import ViewWrapper from './ViewWrapper.jsx';

export default function PortfolioItemTemplatePage() {
	const [portfolioItem, setPortfolioItem] = React.useState(null);
	const { slug } = useParams();

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded(`fmlc_${slug}__portfolio`, setPortfolioItem, () => fetchPortfolioItem(slug));
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
