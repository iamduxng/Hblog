import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LayoutPost from 'components/layout/post'
import Seo from 'components/seo'
import BlocksRenderer from 'components/blocks-renderer'
import Headings from 'components/core/headings'

const AboutPage = () => {
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
    <LayoutPost>
      <Seo seo={seo} />
      <Headings title={strapiAbout.title} />
      <BlocksRenderer blocks={blocks} />
    </LayoutPost>
  )
}

export default AboutPage
