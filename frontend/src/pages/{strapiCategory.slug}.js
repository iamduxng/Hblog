import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Seo from 'components/seo'
import ArticlesGrid from 'components/articles/articles-grid'

const CategoryPage = ({ location, data }) => {
  const {strapiCategory: { articles = null }} = data
  return (
    <Layout location={location}>
      <Seo seo={{ metaTitle: 'Articles' }} />

      <div className="h-container">
        {articles &&
          <ArticlesGrid articles={articles} />
        }
      </div>
    </Layout>
  )
}

export default CategoryPage

export const query = graphql`
  query($slug: String) {
    strapiCategory(slug: { eq: $slug }) {
      id
      strapi_id,
      name,
      slug,
      articles {
        ...ArticleCard
      }
    }
  }
`
