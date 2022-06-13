import sanityClient from 'sanityClient';

// •••••••••••••••••••••••••••••••••••••••••••••
// -> GROQ --> Graph-Relational-Object-Queries
// ---------------------------------------
//  A query language developed by Sanity for getting
//  data from Sanity healdless CMS projects.
// ---------------------------------------
// MORE INFO --> https://www.sanity.io/docs/how-queries-work
// •••••••••••••••••••••••••••••••••••••••••••••

export function fetchAboutPageInfo() {
	return sanityClient.fetch(
		`*[_type == 'about'][0]{
            headerText,
            headerVideo,
            bioHeader,
            bio
        }`
	);
}

export function fetchGeneralInfo() {
	return sanityClient.fetch(
		`*[_type == 'general'][0]{
            landingSlogan,
            landingVideo,
            facebook,
            instagram,
            yelp,
            youtube
        }`
	);
}

export function fetchYelpURL() {
	return sanityClient.fetch(
		`*[_type == 'general'][0]{
            yelp,
        }`
	);
}

//---------
// --> VIDEOS
//---------
export function fetchVideos() {
	return sanityClient.fetch(
		`*[_type == 'video']{
            title, 
            embed
        }`
	);
}

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
            graphic->{
                img{
                    asset->{
                        url,
                        _id
                    }
                }
            },
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
// --> PORTFOLIO ITEMS
//---------

// Get Full Portfolio
export function fetchPortfolioItems() {
	return sanityClient.fetch(
		`*[_type == 'portfolioItem']{
            title, 
            shortSummary,
            slug,
            photos[]{
                asset->{
                    url,
                    _id
                }
            },
            tags[]->{
                title
            },
            services[]->{
                title,
                slug
            },
        }`
	);
}

// Get Specific Portfolio Item
export function fetchPortfolioItem(slug) {
	return sanityClient.fetch(
		`*[slug.current == $slug][0]{
            title, 
            subtitle,
            slug,
            photos[]{
                asset->{
                    url,
                    _id
                }
            },
            faqs[]->{
                question,
                answer
            },
            tags[]->{
                title
            },
            services[]->{
                title,
                slug
            },
            body
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

//----------------------------
// --> Content For Sections
//----------------------------

// Get content for website services section
export function fetchServicesSectionContent() {
	return sanityClient.fetch(
		`*[_type == 'sectionServices']{
            titleTop,
            titleBottom,
            subtitle,
            services {
                serviceOne->{
                    title,
                    shortSummary,
                    slug,
                    mainImage{
                        asset-> {
                            url,
                            _id
                        }
                    }
                },
                serviceTwo->{
                    title,
                    shortSummary,
                    slug,
                    mainImage{
                        asset-> {
                            url,
                            _id
                        }
                    }
                },
                serviceThree->{
                    title,
                    shortSummary,
                    slug,
                    mainImage{
                        asset-> {
                            url,
                            _id
                        }
                    }
                },
                serviceFour->{
                    title,
                    shortSummary,
                    slug,
                    mainImage{
                        asset-> {
                            url,
                            _id
                        }
                    }
                },
            }
        }`
	);
}

// Get articles for Learn Lawncare section banner
export function fetchLearnLawnCareSectionArticles() {
	return sanityClient.fetch(
		`*[_type == 'sectionLearnLawncare']{
            title,
            subtitle,
            backgroundImage{
                asset-> {
                    url,
                    _id
                }
            },
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

// Fetch content for 'Professional Lawn Care' Section on home page
export function fetchProfLawncareContent() {
	return sanityClient.fetch(
		`*[_type == 'sectionProfLawncare']{
            title,
            subtitle,
            body,
            sectionPicture{
                asset->{
                    url,
                    _id
                }
            }
        }`
	);
}
