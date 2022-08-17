import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const styles = {
  wrapper: 'block cursor-pointer w-20 h-20 overflow-hidden',
  background: 'h-full w-full flex items-center justify-center',
  logo: 'w-10 h-10 shadow-xl',
}

const BlockSocial = ({ data }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapper}
    >
      <BackgroundImage
        Tag="div"
        className={styles.background}
        fluid={data.background.localFile.childImageSharp.fluid}
      >
        <div class={styles.logo}>
          <img src={data.logo.localFile.url} alt={data.logo.alternativeText} />
        </div>
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
