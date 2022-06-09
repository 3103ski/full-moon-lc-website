// React
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Packages
import { AnimatePresence } from 'framer-motion';

// Project Imports
import { scrollToTopOf } from 'util';
import { HOME, ABOUT_US, OUR_WORK, VIDEOS, ARTICLES, SERVICE } from 'routes';
import {
	AboutPage,
	ArticleTemplatePage,
	BrowseArticlesPage,
	ExploreWorkPage,
	HomePage,
	ServiceTemplatePage,
	VideosPage,
	WorkTemplatePage,
} from './components';

export default function AnimatedRoutes() {
	const location = useLocation();

	return (
		// DEV NOTE --> View animations can be adjusted in 'src/util/framerMotion.js' file.
		<AnimatePresence exitBeforeEnter onExitComplete={() => scrollToTopOf('app')}>
			<Routes location={location} key={location.pathname}>
				<Route exact path={HOME} element={<HomePage />} />
				<Route exact path={ABOUT_US} element={<AboutPage />} />
				<Route path={`${SERVICE}/:service`} element={<ServiceTemplatePage />} />
				<Route exact path={ARTICLES} element={<BrowseArticlesPage />} />
				<Route path={`${ARTICLES}/:articleId`} element={<ArticleTemplatePage />} />
				<Route exact path={VIDEOS} element={<VideosPage />} />
				<Route exact path={OUR_WORK} element={<ExploreWorkPage />} />
				<Route path={`${OUR_WORK}/:projectId`} element={<WorkTemplatePage />} />
			</Routes>
		</AnimatePresence>
	);
}
