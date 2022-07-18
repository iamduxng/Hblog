import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from 'components/layout'
import Seo from 'components/seo'
import BlocksRenderer from 'components/blocks-renderer'
import Headings from 'components/core/headings'

const AboutPage = ({ location }) => {
  const { strapiAbout } = useStaticQuery(graphql`
    query {
      strapiAbout {
        title
        blocks {
          ...Blocks
        }
      }
    }
  `)
  const { title, blocks } = strapiAbout

  const seo = {
    metaTitle: title,
    metaDescription: title,
  }

  return (
    <Layout location={location} crumbLabel="About">
      <Seo seo={seo} />
      <Headings title={strapiAbout.title} />
      <BlocksRenderer blocks={blocks} />
    </Layout>
  )
}

export default AboutPage
