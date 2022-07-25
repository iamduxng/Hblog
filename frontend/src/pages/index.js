import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from 'components/layout'
import Seo from 'components/seo'
import HomeCategories from 'components/home/categories'

const HomePage = ({ location }) => {
  const { allStrapiCategory } = useStaticQuery(graphql`
    query {
      allStrapiCategory(
        limit: 5,
        sort: { fields: updatedAt },
        filter: {
          articles: {
            elemMatch: {
              id: {ne: "null"}
            }
          }
        },
      ) {
        nodes {
          ...HomeCategory,
        }
      }
    }
  `)

  return (
    <Layout location={location} crumbLabel="Home">
      <Seo seo={{ metaTitle: 'Home' }} />

      <HomeCategories categories={allStrapiCategory.nodes} />
    </Layout>
  )
}

export default HomePage
