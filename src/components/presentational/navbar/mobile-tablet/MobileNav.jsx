// --> React
import React from 'react';
// import { Link } from 'react-router-dom';

// --> Project Imports
import { SERVICE, ABOUT_US, VIDEOS, OUR_WORK, HOME, ARTICLES, ESTIMATE, PHONE_NUMBER } from 'routes';
import { Button, Modal } from 'components';
import { PHONE, LEAF } from 'icons';

// --> Components Imports
import Drawer from './drawer/Drawer';
import Link from './link/Link.jsx';
import Style from './mobileNav.module.scss';
import Toggle from './toggle/Toggle.jsx';

export default function MobileNav({ services = [] }) {
	const [open, toggleOpen] = React.useState(false);
	const [contactOpen, toggleContactOpen] = React.useState(false);

	return (
		<>
			<div
				className={Style.ContactWrapper}
				data-contact-open={contactOpen ? 1 : 0}
				data-toggle-open={open ? 1 : 0}>
				<Button space='10x' icon={LEAF} onClick={() => toggleContactOpen(true)} color='secondary'>
					Get Started
				</Button>
				<Modal isOpen={contactOpen} title='Help Center' callback={toggleContactOpen}>
					<Button.FluidWrapper>
						<Button
							as={Link}
							to={ESTIMATE}
							icon={LEAF}
							onClick={() => toggleContactOpen(false)}
							fluid
							space='10y'>
							Request A Quote
						</Button>
						<Button
							as={'a'}
							href={`tel:${PHONE_NUMBER}`}
							onClick={() => toggleContactOpen(false)}
							space='10y'
							fluid
							icon={PHONE}>
							Call Us Now
						</Button>
					</Button.FluidWrapper>
				</Modal>
			</div>
			<div className={Style.Container}>
				<Toggle toggle={() => toggleOpen(!open)} open={open} />
				<Drawer open={open} toggle={toggleOpen}>
					<Link.Container>
						<Link toggle={toggleOpen} to={HOME}>
							Home
						</Link>
						<Link.SectionLabel>Explore</Link.SectionLabel>
						<Link toggle={toggleOpen} to={OUR_WORK}>
							Our Work
						</Link>
						<Link toggle={toggleOpen} to={ARTICLES}>
							Articles
						</Link>
						<Link toggle={toggleOpen} to={VIDEOS}>
							Videos
						</Link>
						<Link toggle={toggleOpen} to={ABOUT_US}>
							About Us
						</Link>
						<Link.SectionLabel>Services</Link.SectionLabel>
						{services.map((s, i) => (
							<Link
								key={`${s.slug.current}_${i}`}
								toggle={toggleOpen}
								to={`${SERVICE}/${s.slug.current}`}>
								{s.title}
							</Link>
						))}
						<Button
							as={'a'}
							href='tel:7724185307'
							onClick={() => toggleOpen(false)}
							space='10y'
							fluid
							icon={PHONE}
							color='secondary'>
							Call Us Now
						</Button>
					</Link.Container>
				</Drawer>
			</div>
		</>
	);
}
