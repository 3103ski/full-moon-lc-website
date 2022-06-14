// --> React
import React from 'react';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { fetchVideos } from 'groq';
import { checkSeshStorageAddIfNeeded } from 'util';

// -->  Component Imports
import Style from './browseVideos.module.scss';

export default function BrowseVideosSection() {
	const [videos, setVideos] = React.useState(null);
	const [videoWidth, setVideoWidth] = React.useState(null);

	const colRef = React.useRef();

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded('fmlc__videoBrowse', setVideos, fetchVideos);
	}, []);

	React.useEffect(() => {
		if (colRef && !videoWidth) {
			setVideoWidth(colRef.current.clientWidth);
		}
		window.addEventListener('resize', function () {
			setVideoWidth(colRef.current.clientWidth);
		});
	}, [videoWidth]);

	return (
		<Container as={'section'} className={Style.SectionWrapper}>
			<Grid relaxed>
				<Grid.Row>
					{videos &&
						videos.map((vid, i) => {
							let vidID = vid.embed ? vid.embed.split('watch?v=')[1] : '';
							return (
								<Grid.Column
									className={Style.Col}
									key={`${vid.vidID}__${i}`}
									mobile={16}
									tablet={8}
									computer={5}>
									<h3>{vid.title}</h3>
									{colRef !== null && (
										<iframe
											width={videoWidth}
											height={videoWidth / 1.7777}
											src={`https://www.youtube.com/embed/${vidID}`}
											title='YouTube video player'
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen></iframe>
									)}
								</Grid.Column>
							);
						})}
					<Grid.Column mobile={16} tablet={8} computer={5}>
						<div
							id='colWidth'
							style={{ position: 'relative', width: '100%', height: '1px' }}
							ref={colRef}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
}
