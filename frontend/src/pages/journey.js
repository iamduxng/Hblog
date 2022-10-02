import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Seo from 'components/seo'
import ArticlesGrid from 'components/articles/articles-grid'
import GMap from 'components/core/gmap'

const CategoryPage = ({ location, data }) => {
  const {strapiCategory: { articles = null }} = data

  const params = new URLSearchParams(location.search)
  const lat = parseInt(params.get('lat'))
  const lng = parseInt(params.get('lng'))

  return (
    <Layout location={location}>
      <Seo seo={{ metaTitle: 'Travel' }} />

      { lat && lng && (
        <GMap lat={lat} lng={lng} />
      )}

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
  {
    strapiCategory(slug: { eq: "travel" }) {
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
