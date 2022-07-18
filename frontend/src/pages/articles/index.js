import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from 'components/layout'
import Seo from 'components/seo'
import ArticlesGrid from 'components/articles/articles-grid'

const ArticlesPage = ({ location }) => {
  const { allStrapiArticle } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
        }
      }
    }
  `)

  return (
    <Layout location={location} crumbLabel="Posts">
      <Seo seo={{ metaTitle: 'Home' }} />
      <main>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main>
    </Layout>
  )
}

export default ArticlesPage
