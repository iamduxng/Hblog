require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')

module.exports = {
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: 'article',
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: {
                cover: '*',
                blocks: {
                  populate: '*',
                },
              },
            },
          },
          {
            singularName: 'author',
          },
          {
            singularName: 'category',
          },
        ],
        singleTypes: [
          {
            singularName: 'about',
            queryParams: {
              populate: {
                blocks: {
                  populate: '*',
                },
              },
            },
          },
          {
            singularName: 'global',
            queryParams: {
              populate: {
                favicon: '*',
                defaultSeo: {
                  populate: '*',
                },
              },
            },
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          // location: required and must include the pathname property
          location: {
            pathname: '/',
          },
          // crumbLabel: required label for the default crumb
          crumbLabel: 'Home',
          // all other properties optional
          crumbSeparator: ' / ',
        },
      },
    },
  ],
}
