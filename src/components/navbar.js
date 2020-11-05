import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';
import dskLogo from '../images/dsk-logo.png';
import mobLogo from '../images/mob-logo.svg';

const Navbar = () => (
	<div className="hero-head">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="logo"
						href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
					>
					<picture>
						<source
							type="image/png"
							srcset={mobLogo}
							media="screen and (max-width: 600px)"
						/>

						<img src={dskLogo} alt="SweMoc" />
						{/* <img src={mobLogo} alt="SweMoc" /> */}

						
					</picture>
						
					</a>
				</div>
				{/* <div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<span className="navbar-item">
							<a
								className="button is-danger is-inverted"
								href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
							>
								<span className="icon">
									<FaGithub size="fa-2x" />
								</span>
								<span>Download</span>
							</a>
						</span>
					</div>
				</div> */}
			</div>
		</nav>
	</div>
);

export default Navbar;
