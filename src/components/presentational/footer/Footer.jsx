// --> React
import React from 'react';
import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { banner500 } from 'assets';
import { Button, SocialIcon } from 'components';
import { LEAF } from 'icons';
import { HOME, ESTIMATE } from 'routes';
import { fetchGeneralInfo } from 'groq';
import { checkSeshStorageAddIfNeeded } from 'util';

// --> Component Imports
import style from './footer.module.scss';

export default function Footer() {
	const [socialLinks, setSocialLinks] = React.useState(null);

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded('fmlc_gen_info', setSocialLinks, fetchGeneralInfo);
		// let genInfo = sessionStorage.getItem('fmlc_gen_info');
		// if (genInfo) {
		// 	setSocialLinks(JSON.parse(genInfo));
		// } else {
		// 	fetchGeneralInfo().then((data) => {
		// 		sessionStorage.setItem('fmlc_gen_info', JSON.stringify(data));
		// 		setSocialLinks(data);
		// 	});
		// }
	}, []);

	return (
		socialLinks !== null && (
			<footer className={style.FooterWrapper}>
				<div className={style.Top}>
					<Container>
						<Grid className={style.Grid}>
							<Grid.Row centered>
								<Grid.Column mobile={16} tablet={10} computer={10}>
									<h3>Friendly & Ready To Help</h3>
									<p>
										We are ready to have a team member work out a quote. Fill our our form or
										contact us now!
									</p>
								</Grid.Column>
								<Grid.Column only='tablet computer' tablet={6} computer={6}>
									<Link to={ESTIMATE}>
										<Button floated='right' color='secondary' icon={LEAF}>
											Request Quote
										</Button>
									</Link>
								</Grid.Column>

								<Grid.Column only='mobile' mobile={16}>
									<Link to={ESTIMATE}>
										<Button selfCenter space={'10xy'} color='secondary' thin icon={LEAF}>
											Request Quote
										</Button>
									</Link>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</div>
				<div className={style.Bottom}>
					<Container>
						<Grid className={style.Grid}>
							<Grid.Row centered stretched>
								<Grid.Column tablet={10} className={style.FooterBrand}>
									<Link to={HOME}>
										<img className={style.Logo} src={banner500} alt='Footer Branding Banner' />
									</Link>
								</Grid.Column>
								<Grid.Column mobile={16} tablet={6} computer={6} className={style.InfoWrapper}>
									<p>Licensed, Insured, and Bonded</p>
									<div className={style.SocialIconWrapper}>
										<SocialIcon link={socialLinks.instagram} margin='0 4px' type={'insta'} />
										<SocialIcon link={socialLinks.facebook} margin='0 4px' type={'fb'} />
										<SocialIcon link={socialLinks.youtube} margin='0 4px' type={'youtube'} />
										<SocialIcon link={socialLinks.yelp} margin='0 4px' type={'yelp'} />
									</div>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</div>
			</footer>
		)
	);
}
