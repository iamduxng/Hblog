import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ArticlesGrid from 'components/articles/articles-grid'
import HomeCategory from './category'

const HomeCategoryLatest = () => {
  const { allStrapiArticle } = useStaticQuery(graphql`
    query {
      allStrapiArticle (
        limit: 10,
        sort: {
          order: DESC,
          fields: createdAt,
        }
      ) {
        nodes {
          ...ArticleCard,
        }
      }
    }
  `)

  return (
    <HomeCategory name="latest">
      <ArticlesGrid articles={allStrapiArticle.nodes} />
    </HomeCategory>
  )
}

export default HomeCategoryLatest
