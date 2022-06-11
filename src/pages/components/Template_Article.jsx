// --> React
import React from 'react';
import { useParams } from 'react-router-dom';

// --> Project Imports
import { PageHeader, ArticleContentSection, Loading } from 'components';
import ViewWrapper from './ViewWrapper';
import { fetchArticleTemplateContent } from 'groq';

export default function ArticleTemplatePage() {
	const [article, setArticle] = React.useState(null);
	const { slug } = useParams();

	React.useEffect(() => {
		fetchArticleTemplateContent(slug)
			.then((data) => (data[0] ? setArticle(data[0]) : null))
			.catch(console.error);
	}, [slug]);
	console.log({ article });
	return (
		<ViewWrapper>
			{!article ? (
				<Loading size='screen' />
			) : (
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
