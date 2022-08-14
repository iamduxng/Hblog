import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LayoutPost from 'components/layout/post'
import Seo from 'components/seo'
import BlocksRenderer from 'components/core/blocks-renderer'

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
    <LayoutPost location={location}>
      <Seo seo={seo} />
      <BlocksRenderer blocks={blocks} />
    </LayoutPost>
  )
}

export default AboutPage
