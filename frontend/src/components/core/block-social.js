import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const styles = {
  wrapper: 'block w-full h-full cursor-pointer overflow-hidden',
  logo: 'w-10 h-10 hover:scale-125 mx-auto',
}

const BlockSocial = ({ data, bgClasses, logoClasses }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapper}
    >
      <BackgroundImage
        Tag="div"
        className={bgClasses}
        fluid={data.background.localFile.childImageSharp.fluid}
      >
        <img
          src={data.logo.localFile.url}
          alt={data.logo.alternativeText}
          className={`${styles.logo} ${logoClasses}`}
        />
      </BackgroundImage>
    </a>
  )
}

export default BlockSocial

export const query = graphql`
  fragment BlockSocial on STRAPI__COMPONENT_SHARED_SOCIAL_MEDIA {
    link,
    displayName,
    background {
      mime
      localFile {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    },
    logo {
      alternativeText,
      localFile {
        url
      }
    },
  }
`
