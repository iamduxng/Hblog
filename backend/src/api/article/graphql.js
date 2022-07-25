module.exports = (strapi) => ({nexus}) => ({
    types: [
      nexus.extendType({
        type: 'Query',
        definition(t) {
          t.field('queryArticles', {
            // Response type
            type: 'ArticlesResponse',

            // Args definition
            args: { title: nexus.stringArg() },

            // Resolver definition
            resolve(_, args) {
              return {
                articles: args.title
              }
            }
          })
        }
      }),
      nexus.objectType({
        name: 'ArticlesResponse',
        definition(t) {
          t.field('articles', {
            type: 'ArticleEntityResponse',
            resolve: (parent, args) => {
              return strapi.service('api::article.article').findOne(parent.articles, args)
            }
          })
        },
      })
    ],
    resolversConfig: {
      "Query.queryArticles": {
        auth: false
      },
    }
})
