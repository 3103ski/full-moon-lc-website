// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import tag from './tag';
import article from './article';
import author from './author';
import service from './service';
import faq from './faq';
import video from './video';
import branding from './branding';
import sectionLearnLawncare from './sectionLearnLawncare';
import sectionProfLawnCare from './sectionProfLawnCare';
import sectionServices from './sectionServices';
import portfolioItem from './portfolioItem';

import generalInformaion from './generalInformaion';
import aboutPage from './aboutPage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		article,
		service,
		video,
		portfolioItem,
		faq,
		aboutPage,
		sectionProfLawnCare,
		sectionLearnLawncare,
		sectionServices,
		generalInformaion,
		branding,
		tag,
		author,
		blockContent,
	]),
});
