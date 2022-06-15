// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid, Embed } from 'semantic-ui-react';

// --> Project Imports
import { Button } from 'components';
import { placeholderLawn, banner1000, bannerVert_700 } from 'assets';
import { OUR_WORK, ESTIMATE } from 'routes';
import { MOWER, LEAF } from 'icons';
import { checkSeshStorageAddIfNeeded } from 'util';
import { fetchGeneralInfo } from 'groq';
// --> Component Imports

import style from './homeLanding.module.scss';

export default function HomeLandingSection() {
	const [video, setVideo] = React.useState(null);

	console.log(video);

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded(
			`fmlc_landingvideo`,
			(vid) => (vid ? setVideo(vid.split('=')[1]) : setVideo(null)),
			fetchGeneralInfo,
			null,
			'landingVideo'
		);
	}, []);

	const Header = ({ vid = null }) => {
		return (
			<header
				className={style.SectionWrapper}
				data-video={vid ? 1 : 0}
				style={{ backgroundImage: vid ? '' : `url(${placeholderLawn})` }}>
				<Container>
					<Grid className={style.Wrapper}>
						<Grid.Row>
							<Grid.Column className={style.LogoDesktop} tablet={16} computer={16} only='tablet computer'>
								<img src={banner1000} alt='Full Moon Banner' />
							</Grid.Column>
							<Grid.Column className={style.LogoMobile} mobile={16} only='mobile'>
								<img src={bannerVert_700} alt='Full Moon Banner' />
							</Grid.Column>

							<Grid.Column textAlign='center' mobile={16}>
								<h3>The Right Services. The Right Price.</h3>
							</Grid.Column>

							<Grid.Column textAlign='center' tablet={16} computer={16} only='tablet computer'>
								<div className={style.ButtonWrapper}>
									<Button as={Link} to={ESTIMATE} space='10x' color='secondaryTransp' icon={LEAF}>
										Get Estimate
									</Button>
									<Button space='10x' as={Link} to={OUR_WORK} color='secondaryTransp' icon={MOWER}>
										Our Work
									</Button>
								</div>
							</Grid.Column>

							<Grid.Column textAlign='center' mobile={16} only='mobile'>
								<Button.FluidWrapper>
									<Button
										as={Link}
										to={ESTIMATE}
										fluid
										space='10y'
										color='secondaryTransp'
										icon={LEAF}>
										Get Estimate
									</Button>
									<Button fluid color='secondaryTransp' as={Link} to={OUR_WORK} icon={MOWER}>
										Our Work
									</Button>
								</Button.FluidWrapper>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
				<div className={style.Overlay} />
			</header>
		);
	};

	return video ? (
		<div className={style.HeaderVideoContainer} id={'section-1'}>
			<div className={style.HeaderVideoOverlay}>
				<Header vid={video} />
			</div>
			<Embed
				autoplay={true}
				id={video}
				active
				source='youtube'
				iframe={{
					allowFullScreen: true,
					src: `https://www.youtube.com/embed/${video}?autoplay=1&;mute=1&;playlist=${video}&;loop=1&;controls=0&;rel=0`,
					allow: 'autoplay',
				}}
			/>
		</div>
	) : (
		<Header vid={video} />
	);
}
