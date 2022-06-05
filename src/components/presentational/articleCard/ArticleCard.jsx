// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Icon } from '@iconify/react';

// --> Local Styling
import style from './articleCard.module.scss';

export default function CardLink({ backgroundImage, title, summary, linkText, to = '/' }) {
	return (
		<Link to={to}>
			<article className={style.Wrapper} style={{ backgroundImage: `url(${backgroundImage})` }}>
				<div className={style.Overlay} />
				<div className={style.Inner}>
					<h3 className={style.Title}>{title}</h3>
					<h3 className={style.TitleInner}>{title}</h3>
					<p className={style.Summary}>{summary}</p>
					<div className={style.LinkWrapper}>
						<p>{linkText}</p>
						<Icon icon={'bi:arrow-right-circle-fill'} />
					</div>
				</div>
			</article>
		</Link>
	);
}
