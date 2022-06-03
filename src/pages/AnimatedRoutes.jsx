// React
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Page Imports
import {
	AboutPage,
	ArticleTemplatePage,
	BrowseArticlesPage,
	ExploreWorkPage,
	HomePage,
	ServiceTemplatePage,
	VideosPage,
	WorkTemplatePage,
} from './components/';

import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/service/:service' element={<ServiceTemplatePage />} />
				<Route path='/articles' element={<BrowseArticlesPage />} />
				<Route path='/articles/:articleId' element={<ArticleTemplatePage />} />
				<Route path='/videos' element={<VideosPage />} />
				<Route path='/work' element={<ExploreWorkPage />} />
				<Route path='/work/:projectId' element={<WorkTemplatePage />} />
			</Routes>
		</AnimatePresence>
	);
}
