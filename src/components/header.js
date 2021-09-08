import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

// import gatsbyLogo from '../images/gatsby-icon.png';
// import bulmaLogo from '../images/bulma-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<>
	{/* <section className="hero heroBg is-fullheight">

	</section> */}
	<section className="hero heroBg hero-height">
		<Navbar />
		
		<div className="hero-body" style={{paddingTop: 0}}>

						<div className="content"  >
						<div className='columns is-multiline'>
						<div className="column is-6 margin-text-hero">
							<h1 className="is-uppercase is-size-3 is-size-large-desktop has-text-black" style={{marginBottom: 0}}>
							Keeps<br /> you <br/> moving.
							</h1>
							</div>	
							<div className="column is-7" style={{paddingTop: 0, paddingBottom: 0}}>
							<h6 className="subtitle has-text-black is-size-6 is-size-2-desktop" style={{marginBottom: 0}}>
							Exclusive Swedish <br/> supplement solutions <br/> coming to Egypt.
							<div className="column is-7" style={{marginLeft: 0,paddingLeft: 0}}>
								<a
									className="button blackcta heroCta"
									href="#cta"
								>
									{/* <span className="icon">
										<FaGithub size="fa-2x" />
									</span> */}
									
									<span className=" wider has-text-white is-size-6 is-size-4-desktop" >Get 20% Discount</span>
									
								</a>
								</div>
							</h6>
							</div>
						</div>
						</div>

				
			
		</div>
	</section>
	</>
);

export default Header;
