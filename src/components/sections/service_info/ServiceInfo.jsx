// --> React
import React from 'react';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { Button, FAQ, FAQItem, CurveGraphic } from '../../../components';
import { MOWER } from '../../../iconify';

// --> Component Imports
import style from './serviceInfo.module.scss';

export default function ServiceInfoSection() {
	return (
		<section className={style.SectionWrapper}>
			<Container>
				<Grid>
					<Grid.Row>
						<Grid.Column>
							<h1 className={style.Title}>Property Cleanup</h1>
							<h3 className={style.Sub}>some subtitle coming soon</h3>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={9} computer={10} className={style.Body}>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								sit aspernatur aut odit aut fugit, sed quia consequuntur
							</p>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								sit aspernatur aut odit aut fugit, sed quia consequuntur
							</p>
							<Button selfCenter space='10xy' icon={MOWER} color='secondary'>
								Get Estimate
							</Button>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={7} computer={6}>
							<FAQ>
								<FAQItem
									useIcon
									question='Is there a limit to the property size for cleanup?'
									answer={
										'No. itecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur'
									}
								/>
								<FAQItem
									useIcon
									question='Do you clean snow from driveways and sidewalks?'
									answer={
										'Yes. itecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur'
									}
								/>
								<FAQItem
									useIcon
									question='Do you also haul yard waste?'
									answer={
										'Yes. itecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur'
									}
								/>
							</FAQ>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<CurveGraphic pos='bottom' />
			</Container>
		</section>
	);
}
