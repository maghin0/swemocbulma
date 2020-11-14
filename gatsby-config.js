module.exports = {
	siteMetadata: {
		title: 'SweMoc Landing page',
		author: 'Maghin',
		imageUrl: '',
		description: 'A Swedish supplement shop, exclusively coming to egypt soon!',
		keywords: `Protein, Gym, Healthy, Lifestyle, Athlete, Vitamins, Minerals`,
		twitter: '',
		github: `https://github.com/maghin0`,
		medium: '',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.swemoc.netlify.app`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'SweMoc',
				short_name: 'SweMoc',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/mob-logo.png',
				// orientation: 'portrait'
			}
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
