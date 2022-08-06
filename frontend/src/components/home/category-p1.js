import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ArticlesGrid from 'components/articles/articles-grid'
import HomeCategory from './category'

const HomeCategory1stPriority = () => {
  const { allStrapiCategory } = useStaticQuery(graphql`
    query {
      allStrapiCategory (
        limit: 1,
        sort: { fields: updatedAt },
        filter: {
          priority: {
            eq: "p1"
          },
          isShownOnHome: {
            eq: true
          }
        }
      ) {
        nodes {
          ...HomeCategory,
        }
      }
    }
  `)

  return (
    <>
      { allStrapiCategory.nodes.map((category, idx) => (
        <div key={`category_p1_${idx}`}>
          <HomeCategory name={category.name} slug={category.slug}>
            <ArticlesGrid articles={category.articles} />
          </HomeCategory>
        </div>
      )) }
    </>
  )
}

export default HomeCategory1stPriority
