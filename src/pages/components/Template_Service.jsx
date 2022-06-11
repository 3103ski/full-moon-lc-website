// --> React
import React from 'react';
import { useParams } from 'react-router-dom';

// --> Project Imports
import { PageHeader, ServiceInfoSection, ServicesSection } from 'components';
import ViewWrapper from './ViewWrapper';
import sanityClient from 'sanityClient';

export default function ServiceTemplatePage() {
	const [service, setService] = React.useState(null);
	const { slug } = useParams();

	React.useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == $slug]{
			title,
			body,
			subtitle, 
			faqs[]-> {
				question,
				answer
			},
			mainImage{
				asset->{
					url,
					_id
				}
			}
		}`,
				{ slug }
			)
			.then((data) => {
				console.log({ data });
				if (data.length > 0) setService(data[0]);
			})
			.catch(console.error);
	}, [slug]);

	return (
		<ViewWrapper>
			{service && (
				<>
					<PageHeader
						size='lg'
						title={service.title}
						sub={service.subtitle}
						image={service.mainImage.asset.url}
					/>
					<ServiceInfoSection service={service} />
					<ServicesSection />
				</>
			)}
		</ViewWrapper>
	);
}
