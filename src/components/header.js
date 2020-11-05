import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<>
	{/* <section className="hero heroBg is-fullheight">

	</section> */}
	<section className="hero heroBg is-fullheight">
		<Navbar />
		
		<div className="hero-body">

						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-black">
							Keeps you moving.
							</h1>
							<p className="subtitle has-text-black is-size-3">
							Exclusive Swedish supplement solutions coming to Egypt.
								<a
									className="button blackcta heroCta"
									href=""
								>
									{/* <span className="icon">
										<FaGithub size="fa-2x" />
									</span> */}
									<span>Get 20% Discount</span>
								</a>
							</p>
						</div>

				
			
		</div>
	</section>
	</>
);

export default Header;
