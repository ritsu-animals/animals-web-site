module.exports = {
  plugins: [
     `gatsby-plugin-sharp`,
     {
       resolve: `gatsby-transformer-remark`,
       options: {
         plugins: [
           {
             resolve: `gatsby-remark-images`,
             options: {
                maxWidth: 590,
             },
           },
         ],
       },
     },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
	name: `fig`,
        path: `${__dirname}/content/assets/`,
      },
     },
     {
      resolve: `gatsby-theme-blog`,
      options: {
      	contentPath: `content/blog`,
	assetPath: `content/assets`,
	mdx: true,
      }, 
     },
     {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
	      publisherId: `ca-pub-7689408647365500`
      },
     },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `ニョロとハムさん`,
    author: `hamu san`,
    description: `My site description...`,
	  
    // social: [
    //   {
    //     name: `twitter`,
    //     url: `https://twitter.com/gatsbyjs`,
    //   },
    //   {
    //     name: `github`,
    //     url: `https://github.com/gatsbyjs`,
    //   },
    // ],
  },
}
