/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here n=b*/
  siteMetadata: {
    title: 'The Great Gatsby!',
    author: 'Philip Kimani'
  },
  plugins: [`gatsby-plugin-sass`,
          
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
          },

          {
            resolve: `gatsby-plugin-sharp`,
            options: {
              // Defaults used for gatsbyImageData and StaticImage
              defaults: {},
              // Set to false to allow builds to continue on image errors
              failOnError: true,
              // deprecated options and their defaults:
              base64Width: 20,
              //forceBase64Format: `png jpg`, // valid formats: png,jpg,webp
              useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
              stripMetadata: true,
              defaultQuality: 50,
            },
          },

          {
            resolve: `gatsby-transformer-remark`,
            options: {
              // CommonMark mode (default: true)
              commonmark: true,
              // Footnotes mode (default: true)
              footnotes: true,
              // Pedantic mode (default: true)
              pedantic: true,
              // GitHub Flavored Markdown mode (default: true)
              gfm: true,
              // Plugins configs
              plugins: [
                          // gatsby-remark-relative-images must go before gatsby-remark-images
                  {
                    resolve: `gatsby-remark-relative-images`,
                    // options: {
                    //   // [Optional] The root of "media_folder" in your config.yml
                    //   // Defaults to "static"
                    //   staticFolderName: 'static',
                    //   // [Optional] Include the following fields, use dot notation for nested fields
                    //   // All fields are included by default
                    //   include: ['featured'],
                    //   // [Optional] Exclude the following fields, use dot notation for nested fields
                    //   // No fields are excluded by default
                    //   exclude: ['featured.skip'],
                    // },
                  },

                  {
                    resolve: `gatsby-remark-images`,
                    options: { maxWidth: 1024, linkImagesToOriginal: false },
                  },

              ],
            },
          },

          
  ],
}