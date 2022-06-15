// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Icon } from '@iconify/react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --> Project Imports
import { ARROW_RIGHT } from 'icons';

// --> Component Imports
import style from './articleCard.module.scss';

export default function ArticleCard({ backgroundImage, title, summary, linkText, to = '/' }) {
	const squareVariants = {
		visible: { opacity: 1, transform: 'translateY(50px)', scale: 1, transition: { duration: 0.35 } },
		hidden: { opacity: 0, transform: 'translateY(0px)', scale: 0.75 },
	};
	const controls = useAnimation();
	const [ref, inView] = useInView();

	React.useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [controls, inView]);

	return (
		<Link to={to}>
			<motion.div animate={controls} ref={ref} initial={'hidden'} variants={squareVariants}>
				<article className={style.Wrapper} style={{ backgroundImage: `url(${backgroundImage})` }}>
					<div className={style.Overlay} />
					<div className={style.Inner}>
						<h3 className={style.Title}>{title}</h3>
						<h3 className={style.TitleInner}>{title}</h3>
						<p className={style.Summary}>{summary}</p>
						<div className={style.LinkWrapper}>
							<p>{linkText}</p>
							<Icon icon={ARROW_RIGHT} />
						</div>
					</div>
				</article>
			</motion.div>
		</Link>
	);
}

ArticleCard.CardGroup = ({ children }) => <div className={style.CardGroup}>{children}</div>;
