// --> React
import React from 'react';
import { useParams } from 'react-router-dom';

// --> Project Imports
import { PageHeader, ArticleContentSection } from 'components';
import { placeholderArticleHeader } from 'assets';
import ViewWrapper from './ViewWrapper';
import sanityClient from 'sanityClient';

export default function ArticleTemplatePage() {
	const [article, setArticle] = React.useState(null);
	const { slug } = useParams();

	React.useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == $slug]{
				title,
				subtitle,
				body,
				slug,
				mainImage{
					asset->{
						url,
						_id
					}
				}
			}`,
				{ slug }
			)
			.then((data) => (data[0] ? setArticle(data[0]) : null))
			.catch(console.error);
	}, [slug]);

	return (
		<ViewWrapper>
			{article && (
				<>
					<PageHeader
						title={article.title}
						sub={article.subtitle}
						image={article.mainImage.asset.url}
						size='lg'
					/>
					<ArticleContentSection article={article} />
				</>
			)}
		</ViewWrapper>
	);
}
