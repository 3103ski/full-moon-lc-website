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
		// let storedData = sessionStorage.getItem(`fmlc_${slug}__article`);
		// if (storedData) {
		// 	setArticle(JSON.parse(storedData));
		// } else {
		// 	fetchArticleTemplateContent(slug)
		// 		.then((data) => {
		// 			if (data[0]) {
		// 				sessionStorage.setItem(`fmlc_${slug}__article`, JSON.stringify(data[0]));
		// 				setArticle(data[0]);
		// 			}
		// 		})
		// 		.catch(console.error);
		// }
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
