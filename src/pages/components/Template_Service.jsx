// --> React
import React from 'react';
import { useParams } from 'react-router-dom';

// --> Project Imports
import { PageHeader, ServiceInfoSection, ServicesSection, Loading } from 'components';
import ViewWrapper from './ViewWrapper';
import { checkSeshStorageAddIfNeeded } from 'util';
import { fetchServiceTemplateContent } from 'groq';

export default function ServiceTemplatePage() {
	const [service, setService] = React.useState(null);
	const { slug } = useParams();

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded(`fmlc_${slug}__service`, setService, fetchServiceTemplateContent, slug);
		// let storedData = sessionStorage.getItem(`fmlc_${slug}__service`);
		// if (storedData) {
		// 	setService(JSON.parse(storedData));
		// } else {
		// 	fetchServiceTemplateContent(slug)
		// 		.then((data) => {
		// 			if (data.length > 0) {
		// 				sessionStorage.setItem(`fmlc_${slug}__service`, data[0]);
		// 				setService(data[0]);
		// 			}
		// 		})
		// 		.catch(console.error);
		// }
	}, [slug]);

	return !service ? (
		<Loading size='screen' />
	) : (
		<ViewWrapper>
			<PageHeader size='lg' title={service.title} sub={service.subtitle} image={service.mainImage.asset.url} />
			<ServiceInfoSection service={service} />
			<ServicesSection />
		</ViewWrapper>
	);
}
