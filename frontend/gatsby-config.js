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
          {
            singularName: 'home',
            queryParams: {
              populate: {
                about: '*',
                avatar: '*',
                background: '*',
                blocks: {
                  populate: '*'
                }
              }
            }
          }
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-background-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: 'none',
          backgroundColor: 'transparent',
        }
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: {
          sm: '(min-width: 640px)',
          md: '(min-width: 768px)',
          l: '(min-width: 1024px)',
        }
      }
    }
  ],
}
