import sanityClient from 'sanityClient';

// •••••••••••••••••••••••••••••••••••••••••••••
// -> GROQ --> Graph-Relational-Object-Queries
// ---------------------------------------
//  A query language developed by Sanity for getting
//  data from Sanity healdless CMS projects.
// ---------------------------------------
// MORE INFO --> https://www.sanity.io/docs/how-queries-work
// •••••••••••••••••••••••••••••••••••••••••••••

//---------
// --> SERVICES
//---------

// Get service slugs for navbars
export function fetchServiceSlugs() {
	return sanityClient.fetch(
		`*[_type == 'service']{
            title,
            slug
        }`
	);
}

// Get Specific Service Content
export function fetchServiceTemplateContent(slug) {
	return sanityClient.fetch(
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
	);
}

//---------
// --> ARTICLES
//---------

// Get All Articles
export function fetchArticles() {
	return sanityClient.fetch(
		`*[_type == 'article']{
            title,
            slug,
            shortSummary,
            tags[]->{
                title
            },
            mainImage{
                asset->{
                    url,
                    _id
                }
            }
        }`
	);
}

// Get Single Article
export function fetchArticleTemplateContent(slug) {
	return sanityClient.fetch(
		`*[slug.current == $slug]{
            title,
            subtitle,
            body,
            slug,
            tags{
                title
            },
            mainImage{
                asset->{
                    url,
                    _id
                }
            }
        }`,
		{ slug }
	);
}

// Get articles for Learn Lawncare section banner
export function fetchLearnLawnCareSectionArticles() {
	return sanityClient.fetch(
		`*[_type == 'bannerArticles']{
            articles {
                articleOne->{
                    title,
                    slug,
                    shortSummary,
                    tags[]->{
                        title
                    },
                    mainImage{
                        asset->{
                            url,
                            _id
                        }
                    }
                },
                articleTwo->{
                    title,
                    slug,
                    shortSummary,
                    tags[]->{
                        title
                    },
                    mainImage{
                        asset->{
                            url,
                            _id
                        }
                    }
                }
            }
        }`
	);
}
