// --> React
import React from 'react';

// --> Packages
// import { Icon } from '@iconify/react';

// --> Project Imports
import { intFromPx, refHeight } from 'util';

// --> Component Imports
import Style from './slider.module.scss';

export default function Slider({ srcUrls = [] }) {
	const [active, setActive] = React.useState(0);
	const [isMobile, setIsMobile] = React.useState(false);
	const outerRef = React.useRef();

	React.useEffect(() => {
		window.addEventListener('resize', (e) => {
			if (document.documentElement.clientWidth < intFromPx(Style.bp_mobile_lg)) {
				if (!isMobile) setIsMobile(true);
			} else {
				if (isMobile) setIsMobile(false);
			}
		});
	});

	return React.useMemo(
		() => (
			<div
				className={Style.Outer}
				style={{
					backgroundImage: `url(${srcUrls[active]})`,
					marginBottom: isMobile ? `${refHeight(outerRef)}px` : '',
				}}>
				<div
					className={Style.SelectorOuter}
					ref={outerRef}
					style={{
						marginBottom: isMobile ? `-${refHeight(outerRef)}px` : '',
					}}>
					<div className={Style.SelectorInner}>
						{srcUrls.map((src, i) => (
							<img
								data-active={active === i ? 1 : 0}
								onClick={() => setActive(i)}
								alt='some pic'
								src={src}
								key={i}
							/>
						))}
					</div>
				</div>
			</div>
		),
		[srcUrls, active, isMobile]
	);
}
