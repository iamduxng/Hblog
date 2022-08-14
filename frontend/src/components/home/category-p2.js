import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ArticlesGrid from 'components/articles/articles-grid'
import HomeCategory from './category'

const HomeCategory2ndPriority = () => {
  const { allStrapiCategory } = useStaticQuery(graphql`
    query {
      allStrapiCategory (
        limit: 1,
        sort: { fields: updatedAt },
        filter: {
          priority: {
            eq: "p2"
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

  const getItemClasses = (idx) => {
    if (idx === 0) {
      return 'md:row-span-2 md:col-span-2'
    } else {
      return ''
    }
  }

  return (
    <>
      { allStrapiCategory.nodes.map((category, idx) => (
        <div key={`category_p2_${idx}`}>
          <HomeCategory name={category.name} slug={category.slug}>
            <ArticlesGrid articles={category.articles} getItemClasses={getItemClasses}/>
          </HomeCategory>
        </div>
      )) }
    </>
  )
}

export default HomeCategory2ndPriority
