import React from 'react';

import { Footer } from '../../components';
import { MotionViewWrapper } from '../../util';

export default function ViewWrapper({ children }) {
	return (
		// DEV NOTE --> View animations can be adjusted in 'src/util/framerMotion.js' file.
		<MotionViewWrapper>
			{children}
			<Footer />
		</MotionViewWrapper>
	);
}
