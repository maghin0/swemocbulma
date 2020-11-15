import React from 'react';
import {
	FaSass,
	FaHtml5,
	FaReact,
	FaMobileAlt,
	FaRocket,
	FaOsi
} from 'react-icons/fa';

import './style.scss';
import Emoji from './emoji';

const Midsection = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-12">
						<article className="media">
							{/* <figure className="media-left">
								<span className="icon is-medium">
									<FaSass size="fa-2x" color="#d22780" />
								</span>
							</figure> */}
							
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4 is-size-1-desktop has-text-white">About SweMoc.</h1>
									<p className="subtitle is-size-6 is-size-3-desktop has-text-white">
									There are thousands of supplements on the market, all vying for your efforts, time and trust . But we’re different – we are a Swedish product, made in Sweden to bring you the highest quality standards! Swemoc was created to provide you with supplements that are tasty, dependable, trusty, and effective. Exclusively brought to you here in Egypt, so you can count on Swemoc to help prevent the need for cure. Everyday we'll add more products that you can trust and love.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							{/* <figure className="media-left">
								<span className="icon is-medium">
									<FaHtml5 size="fa-2x" className="has-text-danger" />
								</span>
							</figure> */}
							
						</article>
					</div>
					{/* <div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaReact size="fa-2x" color="#5e227f" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Gatsby + React?</h1>
									<p className="subtitle is-size-5">
										Uses Gatsby's version <code>v2</code>, enjoy the power of
										the latest web technologies. All set up and waiting for you
										to start building.
									</p>
								</div>
							</div>
						</article>
					</div> */}
					

			</div>
			</div>
		</section>
		<section className="hero quoteBg">
				<div className="custom-body">			
								<div className="content ">
								<div className="columns is-mobile">
								
								<div className="column is-12">
									<h6 className="subtitle is-size-7 is-size-1-desktop has-text-black">
									We are on a journey with you to nurture your heart, mind and body so that you are in control of your wellbeing. 
									</h6>
								</div>
								</div>
								</div>
								</div>
							</section>
							<section className="section">
							<div className="container">
							<div className="media-content">
								<div className="content">
								
									<p className="subtitle is-size-5 is-size-2-desktop has-text-white">
									Sign up now to our email list and get 20% off on your first order and updates for our launch in Egypt!
									</p>
								</div>
							</div>
							</div>
							</section>
							<section className="hero footerBg" style={{height: 233}} id="cta">
								<div className="hero-body">			
								<div className="content footerspace">
								<div className="columns is-multiline is-mobile">
								<div className="column is-12">
								<p className="subtitle is-size-5 is-size-1-desktop has-text-black">
									Get Your 20% Discount
									</p>
								</div>
								
								<div className="column is-8-mobile is-4-desktop">
								<form name="Sign up" netlify>
								<input className="input is-small" type="text" placeholder="Enter your email"></input>
								</form>
								</div>
								<div className="column">
								<div className="content">
						
								<a
									className="button is-small blackcta"
									href=""
								>
									{/* <span className="icon">
										<FaGithub size="fa-2x" />
									</span> */}
									<span type="submit"><p>Sign Up</p></span>
								</a>
							
						</div>
						
								</div>

								</div>
								</div>
								</div>
							</section>
	</div>
);

export default Midsection;
