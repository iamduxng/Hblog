import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ArticlesGrid from 'components/articles/articles-grid'
import HomeCategory from './category'

const HomeCategory3rdPriority = () => {
  const { allStrapiCategory } = useStaticQuery(graphql`
    query {
      allStrapiCategory (
        limit: 2,
        sort: { fields: updatedAt },
        filter: {
          priority: {
            eq: "p3"
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
        <div key={`category_p3_${idx}`} className="mb-28">
          <HomeCategory name={category.name} slug={category.slug}>
            <ArticlesGrid articles={category.articles} />
          </HomeCategory>
        </div>
      )) }
    </>
  )
}

export default HomeCategory3rdPriority
