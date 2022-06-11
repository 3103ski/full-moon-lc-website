// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';
import SanityBlockContent from '@sanity/block-content-to-react';

// --> Project Imports
import { Button } from '../../../components';
import { ABOUT_US } from '../../../routes';
import { mascotThumRight1000 } from '../../../assets';
import { fetchProfLawncareContent } from 'groq';

// --> Component Imports
import style from './profLawnCare.module.scss';

export default function ProfLawnCareSection() {
	const [content, setContent] = React.useState(null);
	const circleRef = React.useRef(null);
	React.useEffect(() => {
		fetchProfLawncareContent()
			.then((data) => (data && data[0] ? setContent(data[0]) : null))
			.catch(console.error);
	});

	return (
		content && (
			<Container fluid className={style.Outer} as={'section'}>
				<Container className={style.Inner}>
					<div className={`${style.CircleOne} ${style.Circle}`} />
					<div className={`${style.CircleTwo} ${style.Circle}`} />

					<Grid>
						<Grid.Row>
							<Grid.Column stretched mobile={16} computer={8} className={style.Column}>
								<div className={style.Content}>
									<h1>{content.title}</h1>
									<h3>{content.subtitle}</h3>
									<SanityBlockContent blocks={content.body} />
									<Link to={ABOUT_US}>
										<Button>About Us</Button>
									</Link>
								</div>
								<img src={mascotThumRight1000} alt='Full Moon Mascot' className={style.MascotGraphic} />
							</Grid.Column>
							<Grid.Column only='computer' computer={8} className={style.Column}>
								<div
									ref={circleRef}
									className={style.CircleImage}
									style={{
										backgroundImage: !circleRef.current
											? ''
											: `url(${content.sectionPicture.asset.url}?fit=crop&h=${circleRef.current.clientHeight}&w=${circleRef.current.clientWidth})`,
									}}></div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Container>
		)
	);
}
