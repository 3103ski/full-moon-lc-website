// --> React
import React from 'react';
import { useParams } from 'react-router-dom';

// --> Project Imports
import { PageHeader, ArticleContentSection, Loading } from 'components';
import ViewWrapper from './ViewWrapper';
import { fetchArticleTemplateContent } from 'groq';
import { checkSeshStorageAddIfNeeded } from 'util';

export default function ArticleTemplatePage() {
	const [article, setArticle] = React.useState(null);
	const { slug } = useParams();

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded(`fmlc_${slug}__article`, setArticle, () => fetchArticleTemplateContent(slug));
	}, [slug]);
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
